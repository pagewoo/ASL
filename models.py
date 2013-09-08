from google.appengine.ext import ndb, db
from google.appengine.ext.db import polymodel
from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers


class Users(db.Model):
	username = db.StringProperty()
	user_id = db.StringProperty()
	age = db.IntegerProperty()
	sex = db.StringProperty()
	loc = db.StringProperty()
	last_mention = db.StringProperty()
	last_mentioner = db.StringProperty()
	real_user = db.BooleanProperty()
	date_created = db.DateTimeProperty(auto_now_add=True)

	def to_dict(self):
		obj = {}
		obj['age'] = self.age
		obj['sex'] = self.sex
		obj['loc'] = self.loc
		obj['user_id'] = self.user_id
		obj['username'] = self.username
		obj['last_mention'] = self.last_mention
		obj['real_user'] = self.real_user
		obj['last_mentioner'] = self.last_mentioner

		return obj
		

class Room(db.Model):
	user_id = db.StringProperty()
	room_name = db.StringProperty()
	token = db.StringProperty()
	entered = db.DateTimeProperty(auto_now=True)

class RdioTagDS(db.Model):
	tag = db.StringProperty()
	songname = db.StringProperty()
	radiokey = db.StringProperty()
	user_id = db.StringProperty()
	song_data = db.TextProperty()

	def to_dict(self):
		obj = {}
		obj['tag'] = self.tag
		obj['songname'] = self.songname
		obj['radiokey'] = self.radiokey
		obj['song_data'] = json.loads(song_data)
		return obj
