import webapp2

from webapp2_extras import auth
from webapp2_extras import sessions
from webapp2_extras.auth import InvalidAuthIdError
from webapp2_extras.auth import InvalidPasswordError

from google.appengine.api import users
from google.appengine.ext import ndb


from nearwoo_ds import Advertiser


class BaseHandler(webapp2.RequestHandler):
  def handle_exception(self, exception, debug):
    logging.exception(exception)
    self.response.write('An error occurred.')
    # If the exception is a HTTPException, use its error code.
    # Otherwise use a generic 500 error code.
    if isinstance(exception, webapp2.HTTPException):
      self.response.set_status(exception.code)
    else:
      self.response.set_status(500)


class SessionHandler(BaseHandler):
  @webapp2.cached_property
  def auth(self):
    """Shortcut to access the auth instance as a property."""
    return auth.get_auth()

  @webapp2.cached_property
  def user_info(self):
    """Shortcut to access a subset of the user attributes that are stored
    in the session.

    The list of attributes to store in the session is specified in
      config['webapp2_extras.auth']['user_attributes'].
    :returns
      A dictionary with most user information
    """
    return self.auth.get_user_by_session()

  @webapp2.cached_property
  def user(self):
    """Shortcut to access the current logged in user.

    Unlike user_info, it fetches information from the persistence layer and
    returns an instance of the underlying model.

    :returns
      The instance of the user model associated to the logged in user.
    """
    u = self.user_info
    return self.user_model.get_by_id(u['user_id']) if u else None

  @webapp2.cached_property
  def session(self):
      """Shortcut to access the current session."""
      return self.session_store.get_session(backend="datastore")

  def render_template(self, view_filename, params={}):
    user = self.user_info
    params['user'] = user
    path = os.path.join(os.path.dirname(__file__), 'views', view_filename)
    self.response.out.write(template.render(path, params))

  def display_message(self, message):
    """Utility function to display a template with a simple message."""
    params = {
      'message': message
    }
    self.render_template('message.html', params)

  # this is needed for webapp2 sessions to work
  def dispatch(self):
    # Get a session store for this request.
    self.session_store = sessions.get_store(request=self.request)
    try:
      # Dispatch the request.
      webapp2.RequestHandler.dispatch(self)
    finally:
      # Save all sessions.
      self.session_store.save_sessions(self.response)



class LoginHandler(webapp2.RequestHandler):
  def get(self):
    user = users.get_current_user()
    if user:
      nickname = user.nickname()
      email = user.email()
      user_id = user.user_id()
      advertiser =
    else:
  def post(self):


config = {
 'webapp2_extras.auth': {
   'user_model': 'populus.populus_ds.PopulusUserDS',
   'user_attributes': ['name', 'last_name', 'email'],
   'session_backend': 'datastore'
  },
 'webapp2_extras.sessions': {
   'secret_key': 'placeholder',
   # session expires in 30 minutes,
   # if cookie doesn't expire first
   'session_max_age': 1800
  }
}


app = webapp2.WSGIApplication([
  ('/login', LoginHandler),
], debug=True, config=config)



