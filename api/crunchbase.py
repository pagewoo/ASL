import os
import json
from google.appengine.api import urlfetch


class Crunchbase():
    def __init__(self, key=None):
        self.key = key or os.environ.get('CRUNCHBASE_KEY')

    def fetch(self, uri):
        url = 'http://api.crunchbase.com/v/1/%s%sapi_key=%s' % (uri, '&' if '?' in uri else '?', self.key)
        response = urlfetch.fetch(url)
        return json.loads(r^Cresponse.content)

    def search(self, q):
        return self.fetch('search.js?query=%s' % q)

    def company_search(self, q):
        js = self.search(q)

        # there are no docs for what search terms search against, so we need to filter by name.
        # amazingly, not all companies actually have a 'name' field.
        return [r for r in js['results'] if 'name' in r and q in r['name'].lower()]

    def company(self, name):
        return self.fetch('company/%s.js' % name)

    def company_summary(self, name):
        r = self.company(name)
        if not r or not r.get('name'):
            return None

        return {'name': r.get('name'),
                'description': r.get('description'),
                'website': r.get('homepage_url'),
                'twitter': r.get('twitter_username'),
                'category': r.get('category_code'),
                'phone': r.get('phone_number'),
                'email': r.get('email_address'),
                'employees': r.get('number_of_employees'),
                'founded': '%s/%s' % (r.get('founded_month'), r.get('founded_year'))}
