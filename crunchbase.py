import json
import webapp2
from api.crunchbase import Crunchbase


class Handler(webapp2.RequestHandler):
    def finish(self, response):
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps(response))


class SearchHandler(Handler):
    def get(self):
        client = Crunchbase()
        q = self.request.get('q')
        results = client.company_search(q)
        self.finish([{'name': r['name'],
                      'uri': '/crunchbase/company/%s' % r['permalink']}
                     for r in results])


class CompanyHandler(Handler):
    def get(self, name):
        client = Crunchbase()
        self.finish(client.company(name))
