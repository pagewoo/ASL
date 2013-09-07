
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


class GetToken(webapp2.RequestHandler):
	def get(self):
		# get the current user
		user = users.get_current_user()
		token = channel.create_channel(user.user_id() + game_key)



class Tester(webapp2.RequestHandler):
	def get(self):
		name = self.request.get('name')
		number = self.request.get('number')
		token = channel.create_channel(name)
		result = {'name' : name, 'number' : number, 'token' : token}
		self.response.out.write(json.dumps(result))


