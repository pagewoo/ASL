
import datetime
import logging
import os
import random
import re
import json
import webapp2
from google.appengine.api import channel
from google.appengine.api import users
from google.appengine.ext import db
from models import *
import uuid
from api.jcrunch import Crunchbase


def get_user_id(user_id):
	user = users.get_current_user()
	if user:
		user_id = user.user_id()

	else:
		if not user_id:
			user_id = str(uuid.uuid4())


	return user_id


class ChangeRoom(webapp2.RequestHandler):
	def get(self, old_room, room_name, user_id):

		logging.info('userid ' + user_id)
		# get the current user
		user_id = get_user_id(user_id)

		logging.info('after ' + user_id)
		old_room = Room.gql('WHERE user_id = :1 AND room_name = :2', user_id, old_room).get()

		# i'm in my current room, send back my current token
		if old_room:
			logging.info('old room!')
			old_room.room_name = room_name
			old_room.put()

		else:

			self.response.out.write('none')


class GetMyProfile(webapp2.RequestHandler):
	def get(self):
		user_id = get_user_id(None)



class SaveProfile(webapp2.RequestHandler):
	def post(self):
		
		asl = json.loads(self.request.body)
		user = Users.gql('WHERE user_id = :1', asl['user_id']).get()
		user.username = asl['username']
		user.age = int(asl['age'])
		user.sex = asl['sex']
		user.loc = asl['loc']
		user.put()


def create_or_get_user(user_id):

	user_obj = Users.gql('WHERE user_id = :1', user_id).get()
	if not user_obj:
		user_obj = Users()
		if users.get_current_user():
			user_obj.username = users.get_current_user().nickname()
			user_obj.real_user = True
		else:
			user_obj.username = user_id
		user_obj.user_id = user_id
		user_obj.put()	
	return user_obj


class EnterRoom(webapp2.RequestHandler):
	def get(self, room_name):
		# get the current user
		
		user_id = get_user_id(None)

		gae_user = create_or_get_user(user_id)

		if not room_name:
			room_name = 'lobby'

		user_room = Room.gql('where user_id = :1 and room_name = :2', user_id, room_name).get()

		# i'm in my current room, send back my current token
		if user_room:
			token = channel.create_channel(user_id)
			user_room.token = token
			user_room.put()

		else:
			token = channel.create_channel(user_id)
			user_room = Room()
			user_room.user_id = user_id
			user_room.room_name = room_name
			user_room.token = token
			user_room.put()

		obj = {
				'user_id': user_id,
				'token': token,
				'user': gae_user.to_dict()
		}

		self.response.out.write(json.dumps(obj))


class SendMessage(webapp2.RequestHandler):
	def post(self):
		data = json.loads(self.request.body)
		scan = messsage_scan(data['message'])
		send_message(data, scan)
		logging.error('MESSAGE ' + str(data['message']))
		self.response.out.write(json.dumps(scan))


def send_message(data, scan):
	data['message']['scan'] = scan
	message = data['message']
	room_name = data['room_name']
	logging.info('room ' + room_name)
	user = users.get_current_user()

	if not room_name:
		logging.error("NO ROOM NAME")

	users_in_room = Room.gql('where room_name = :1', room_name).fetch(100)
	if not users_in_room:
		logging.error("ROOM NOT FOUND")

	for room_user in users_in_room:
		channel.send_message(room_user.user_id, json.dumps(data['message']))


def hyphenate(lt):
	result = ''
	for i, element in enumerate(lt):
		result = ''
		result += element
		if i != len(lt) -1:
			result += '-'
	return result


def send_to_room(hashtag, message):

	logging.info('hashtag ' + hashtag)
	word = hashtag.replace('#', '')

	logging.info('word room ' + word)
	room = Room.gql('where room_name = :1', word).get()
	if not room:
		logging.warning('No Room Found')
		return False

	data = {}
	data['message'] = {'message':message}
	data['room_name'] = room.room_name
	send_message(data, {})
	return True


def hashtags(message):
	message = message['message']
	p = re.compile(r'#\w+')
	matches = p.findall(message)
	if matches:
		for match in matches:
			# add to topic list
			logging.info('sending to room ' + match)
			sent = send_to_room(match, message)
			if sent:
				logging.info('MESSAGES SENT')
				return True
			else:
				logging.error('SEND FAILS')
				return False


def mentions(message):
	p = re.compile(r'@\w+')

	matches =p.findall(message['message'])
	for match in matches:
		username = match.replace('@','')
		# add to user last mention
		user = Users.gql('where username = :1', username).get()
		if not user:
			logging.warning("NO USER FOUND")
		else:
			user.last_mention = message['message']
			user.last_mentioner = message['username']
			user.put()
			logging.info("Last Message saved")


def play_song(message):
	p = re.compile(r'!\w+')
	matches = p.findall(message['message'])

	chosen_song = None
	if len(matches) >= 1:
		logging.info(matches)
		songs = RdioTagDS.gql('where tag = :1', matches[0]).fetch(10)
		if songs:
			if len(songs) > 1:
				rando = random.randint(0,len(songs)-1)
			else:
				rando = 0
			chosen_song = songs[rando]

	return chosen_song

def crunch_base(message):
	message = message['message']
	crunch_results = []
	p = re.compile(r'\^\w+')
	matches =p.findall(message)
	logging.info(matches)
	for match in matches:
		
		query = match.replace('^', '')
		logging.warning('QUERY = ' + str(query))
		crunchbase = Crunchbase()
		# lookup with crunchbase
		crunch = crunchbase.company_summary(query)
		crunch_results.append(crunch)

	return crunch_results

# def add_to_calendar(message):
# 	p = re.compile(r'\*+')
# 	matches =p.findall(message)
# 	if matches:
# 		# add to calendar

def messsage_scan(message):
	tag_success = None
	mention_success = None
	crunch_results = None
	song_success = None

	tagged = hashtags(message)
	mention = mentions(message)
	crunch_results = crunch_base(message)
	song = play_song(message)

	results = {}
	if tagged:
		results['tagged'] = tagged
	if mention:
		results['mention'] = mention

	if song:
		results['song'] = song.to_dict()

	if crunch_results:
		results['crunch_results'] = crunch_results


	return results

			
	
class OnDisconnect(webapp2.RequestHandler):
	def get(self):
		user_id = get_user_id(None)
		rooms = Room.gql('where user_id = :1', user_id).fetch(1000)
		for room in rooms:
			room.delete()
		logging.error("Disconnected")


class PeopleInRoom(webapp2.RequestHandler):
	def get(self, room_name):
		rooms = Room.gql('where room_name = :1', room_name).fetch(1000)
		users = []
		for room in rooms:
			user = Users.gql('where user_id = :1', room.user_id).get()
			users.append(user.to_dict())

		self.response.out.write(json.dumps(users))


		


				

