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

    def company_summary(self, name):
        r = self.company(name)
        if not r or not r.get('name'):
            return None

        def investors(response):
            if not response.get('funding_rounds'):
                return
            for r in response.get('funding_rounds'):
                if not r.get('investments'):
                    continue
                for i in r.get('investments'):
                    if i.get('financial_org'):
                        yield i.get('financial_org').get('name')
                    if i.get('person'):
                        yield ' '.join([i.get('person').get('first_name'), i.get('person').get('last_name')])

        return {'name': r.get('name'),
                'description': r.get('description'),
                'website': r.get('homepage_url'),
                'twitter': r.get('twitter_username'),
                'category': r.get('category_code'),
                'phone': r.get('phone_number'),
                'email': r.get('email_address'),
                'employees': r.get('number_of_employees'),
                'founded': '%s/%s' % (r.get('founded_month'), r.get('founded_year')),
                'funding': r.get('total_money_raised'),
                'investors': list(investors(r))}
