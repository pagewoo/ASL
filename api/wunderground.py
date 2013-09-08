import os
import json
from google.appengine.api import urlfetch


class Wunderground():
    def __init__(self, key=None):
        self.key = key or os.environ.get('WUNDERGROUND_KEY')

    def city_search(self, name):
        url = 'http://autocomplete.wunderground.com/aq?query=%s' % name
        response = urlfetch.fetch(url)
        js = json.loads(response.content)
        return js['RESULTS']

    def fetch(self, feature, q):
        url = 'http://api.wunderground.com/api/%s/%s/%s.json' % (self.key, feature, q)
        response = urlfetch.fetch(url)
        return json.loads(response.content)

    def conditions(self, q):
        return self.fetch('conditions', q)
