
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

		if room.user_ids:
			user_ids = json.loads(room.user_ids)
			user_ids.append(user.user_id())
		else:
			user_ids = [user.user_id()]
		room.user_ids = json.dumps(user_ids)
		room.put()


		token = channel.create_channel(user.user_id() + room_name)
		self.response.out.write(token)


class SendMessage(webapp2.RequestHandler):
	def post(self):
		data = json.loads(self.request.body)
		message = data['message']
		room_name = data['room_name']
		user = users.get_current_user()

		if not room_name:
			logging.error("NO ROOM NAME")

		room = Room.gql('where room_name = :1', room_name).get()
		if not room:
			logging.error("ROOM NOT FOUND")

		user_ids = json.loads(room.user_ids)
		user_ids.append(user.user_id())

		for user_id in user_ids:
			channel.send_message(user_id + room_name, message)

		self.response.out.write('complete')

"!?"
"?!"
"!!"

def hyphenate(lt):
	result = ''
	for i, element in enumerate(lt):
		result = ''
		result += element
		if i != len(lt) -1:
			result += '-'
	return result


def send_to_room(hashtag):
	word = hashtag.strip('#')

	room = Room.gql('where room_name = :1', word).get()
	if not room:
		logging.warning('No Room Found')
		return False


		

def messsage_scan(message):
	symbols = [ '#' : 'topic',
				'@' :'user',
				'!' : 'music', 
				'^' : 'lookup',
			    '*' : 'calendar']

	p = re.compile(r'#+')
	matches = p.findall(message)
	if matches:
		for match in matches:
			# add to topic list
			send_to_room(match)

	p = re.compile(r'@+')
	matches =p.findall(message)
	if matches:
		# add to user stream

	p = re.compile(r'!+')
	matches =p.findall(message)
	if matches:
		# play song

	p = re.compile(r'\^+')
	matches =p.findall(message)
	if matches:
		# lookup with crunchbase

	p = re.compile(r'\*+')
	matches =p.findall(message)
	if matches:
		# add to calendar



				

