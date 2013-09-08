
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
from api.crunchbase import Crunchbase

class EnterRoom(webapp2.RequestHandler):
	def get(self, room_name):
		# get the current user
		if not room_name:
			room_name = 'lobby'

		room = Room.gql('where room_name = :1', room_name).get()
		if not room:
			room = Room()
			room.room_name = room_name

		user = users.get_current_user()

		if not user:
			user_id = str(uuid.uuid4())
		else:
			user_id = user.user_id()


		room.user_id = user_id
		room.put()

		token = channel.create_channel(user_id + '_' + room_name)
		self.response.out.write(token)


class SendMessage(webapp2.RequestHandler):
	def post(self):
		data = json.loads(self.request.body)
		send_message(data)
		logging.error('MESSAGE ' + str(data['message']))
		messsage_scan = messsage_scan(data['message'])
		self.response.out.write(json.dumps(messsage_scan))


def send_message(self):
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
		channel.send_message(room_user.user_id + '_' + room_user.room_name, json.dumps(data['message']))



def hyphenate(lt):
	result = ''
	for i, element in enumerate(lt):
		result = ''
		result += element
		if i != len(lt) -1:
			result += '-'
	return result


def send_to_room(hashtag, message):
	word = hashtag.strip('#')

	room = Room.gql('where room_name = :1', word).get()
	if not room:
		logging.warning('No Room Found')
		return False

	data['message'] = message
	data['room_name'] = room.room_name
	send_message(message)
	return True



def hashtags(message):
	p = re.compile(r'#+')
	matches = p.findall(message)
	if matches:
		for match in matches:
			# add to topic list
			sent = send_to_room(match)
			if sent:
				logging.info('MESSAGES SENT')
				return True
			else:
				logging.error('SEND FAILS')
				return False

def mentions(message):
	p = re.compile(r'@+')
	matches =p.findall(message)
	for match in matches:
		username = match.strip('@')
		# add to user last mention
		user = User.gql('where username == :1', username).get()
		if not user:
			logging.warning("NO USER FOUND")
		else:
			user.last_mention = message
			user.put()
			logging.info("Last Message saved")


def play_song(message):
	p = re.compile(r'!+')
	matches =p.findall(message)
	if matches:
		# play song


def crunch_base(message):
	crunch_results = []
	p = re.compile(r'\^+')
	matches =p.findall(message)
	for match in matches:
		query = match.strip('^')
		crunchbase = CrunchBase()
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

	tag_success = hashtags(message)
	# mention_success = mentions(message)
	# crunch_results = crunch_base(message)
	# song_success = play_song(message)

	results = {'tag_success' : tag_success,
			   'mention_success' : mention_success,
			   'crunch_results' : crunch_results
			   'song_success' : song_success}

	return results

			
	



				

