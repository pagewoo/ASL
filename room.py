
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

		self.response.out.write('complete')




