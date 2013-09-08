import json
import webapp2
from api.wunderground import Wunderground


class Handler(webapp2.RequestHandler):
    def finish(self, response):
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(response))


class SearchHandler(Handler):
    def get(self):
        client = Wunderground()
        q = self.request.get('q')
        results = client.city_search(q)
        self.finish([{'name': r['name'],
                      'uri': '/wunderground/conditions%s' % r['l']}
                     for r in results])


class ConditionsHandler(Handler):
    def get(self, name):
        client = Wunderground()
        self.finish(client.conditions(name))
