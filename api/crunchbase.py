import os
import json
from google.appengine.api import urlfetch


class Crunchbase():
    def __init__(self, key=None):
        self.key = key or os.environ.get('CRUNCHBASE_KEY')

    def fetch(self, uri):
        url = 'http://api.crunchbase.com/v/1/%s%sapi_key=%s' % (uri, '&' if '?' in uri else '?', self.key)
        response = urlfetch.fetch(url)
        return json.loads(response.content)

    def search(self, q):
        return self.fetch('search.js?query=%s' % q)

    def company_search(self, q):
        js = self.search(q)

        # there are no docs for what search terms search against, so we need to filter by name.
        # amazingly, not all companies actually have a 'name' field.
        return [r for r in js['results'] if 'name' in r and q in r['name'].lower()]

    def company(self, name):
        return self.fetch('company/%s.js' % name)
