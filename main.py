#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import room
import crunchbase
import wunderground
from models import *
from google.appengine.api import users
from rdio import Rdio
import logging
import json

rdio = Rdio(("vefvbbxvvgmww9hgqtmbgkwr", "nPKmfwxR3w"))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.redirect('/a/index.html')

class Login(webapp2.RequestHandler):
    def get(self):
        self.redirect(users.create_login_url('/'))

class searchRdio(webapp2.RequestHandler):
  def get(self):
    query = self.request.get('query')
    type = self.request.get('type')
    search = rdio.call('search', {'query':query, 'types':type})
    logging.info(rdio)
    self.response.write(json.dumps(search))

class addTag(webapp2.RequestHandler):
  def post(self):
    obj = json.loads(self.request.body)
    logging.info(obj)
    rdio_song = RdioTagDS.gql('where radiokey = :1 and tag = :2', obj['radiokey'], obj['tagname']).get()
    if rdio_song:
    	return
    else:
      rdio_song = RdioTagDS(
        tag = obj['tagname'],
        songname = obj['songname'],
        radiokey = obj['radiokey'],
        song_data = json.dumps(obj['song_data'])
      )
      rdio_song.put()

    self.response.write('tag added')

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    (r'/enterroom/(.*)', room.EnterRoom),
    (r'/changeroom/(.*)/(.*)/(.*)', room.ChangeRoom),

    ('/login', Login),
    ('/saveprofile', room.SaveProfile),
    ('/sendmessage', room.SendMessage),
    ('/getmyprofile', room.GetMyProfile),
    ('/crunchbase/search', crunchbase.SearchHandler),
    ('/crunchbase/company/(.*)/summary', crunchbase.SummaryHandler),
    (r'/crunchbase/company/(.*)', crunchbase.CompanyHandler),
    ('/wunderground/search', wunderground.SearchHandler),
    (r'/wunderground/conditions/(.*)', wunderground.ConditionsHandler),
    ('/_ah/channel/disconnected/', room.OnDisconnect),

    ('/searchrdio', searchRdio),
    ('/addrdiotag', addTag)
], debug=True)
