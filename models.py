from google.appengine.ext import ndb, db
from google.appengine.ext.db import polymodel
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers


class Users(db.Model):
	username = db.StringProperty()
	password = db.StringProperty()
	user_id = db.StringProperty()
	age = db.IntegerProperty()
	sex = db.StringProperty()
	last_mention = db.StringProperty()
		

class Room(db.Model):
	user_id = db.StringProperty()
	room_name = db.StringProperty()
	token = db.StringProperty()
	entered = db.DateTimeProperty(auto_now_add=True)
