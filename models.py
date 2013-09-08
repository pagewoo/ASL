from google.appengine.ext import ndb, db
from google.appengine.ext.db import polymodel
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers


class Users(db.Model):
	username = db.StringProperty()
	age = db.IntegerProperty()
	sex = db.StringProperty()
		

class Room(db.Model):
	user_ids = db.TextProperty()
	room_name = db.StringProperty()
