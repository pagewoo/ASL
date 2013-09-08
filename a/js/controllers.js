


var host = window.location.hostname;
var STRIPE_KEY;
if ((host === 'localhost') || (host == '127.0.0.1')) {
  host = 'http://' + host + ':8082';
}

function pageCtrl($scope, $http){

  $scope.page = 'room';
  $scope.messages = [];
  $scope.home_page = host + '/b/index.html#';
  $scope.room_name = 'lobby'

  $scope.enter_room = function() {

    $http.get('/enterroom/' + $scope.room_name).success(function(data){
      $scope.room_token = data.token;
      $scope.user_id = data.user_id;
      $scope.old_room_name = $scope.room_name;

      channel = new goog.appengine.Channel($scope.room_token);
      socket = channel.open();
      socket.onopen = $scope.onOpened;
      socket.onmessage = $scope.onMessage;
      socket.onerror = $scope.onError;
      socket.onclose = $scope.onClose;

      $scope.user_profile = data.user;

    });

  }

  $scope.save_profile = function() {
    $http.post('/saveprofile', $scope.user_profile).success(function(data){
      console.log('profile saved')
      $scope.page = 'room'
    });
  }

  $scope.change_room = function() {

    $http.get('/changeroom/' + $scope.old_room_name + '/' + $scope.room_name + '/' + $scope.user_id).success(function(data){
      if (data == 'none') {
        window.location.reload();
      }
      $scope.room_token = data;
      $scope.old_room_name = $scope.room_name;
    });

  }


  $scope.onOpened = function(data){
    console.log('channel onOpened')
  }

  $scope.onMessage = function(data){
    console.log('channel onMessage')
    var data = JSON.parse(data.data);
    $scope.messages.push(data);
    console.log('messages')
    console.log($scope.messages);

    $scope.$apply();

  }

  $scope.onError = function(data){
    console.log('channel onError')
  }

  $scope.onClose = function(data){
    console.log('channel onClose')
  }  

  $scope.enter_room();

  $scope.login = function() {
    window.location = '/login'
  }

  $scope.send_message = function() {

    var obj = {}
    obj.room_name = $scope.room_name;
    obj.message = {'message':$scope.new_command, 'username':$scope.user_profile.username, 'room':$scope.room_name}

    $scope.new_command = '';

    $http.post('/sendmessage', obj).success(function(data){
      console.log('sent')
    });

  }


}

var fake_results = [{"radioKey": "sr16559751", "baseIcon": "album/c/2/2/000000000016922c/1/square-200.jpg", "canDownloadAlbumOnly": true, "radio": {"type": "sr", "key": "sr16559751"}, "artistUrl": "/artist/Big_Caz/", "duration": 107, "album": "Thuggin Without A Cause", "isClean": false, "albumUrl": "/artist/Big_Caz/album/Thuggin_Without_A_Cause/", "shortUrl": "http://rd.io/x/Qiu-8cQ/", "albumArtist": "Big Caz", "canStream": true, "embedUrl": "https://rd.io/e/Qiu-8cQ/", "type": "t", "price": "0.99", "trackNum": 10, "albumArtistKey": "r533048", "key": "t16559751", "icon": "http://rdio-a.cdn3.rdio.com/album/c/2/2/000000000016922c/1/square-200.jpg", "canSample": true, "name": "Ride Out Ft. Snoopdogg, Bino", "isExplicit": true, "artistKey": "r533048", "url": "/artist/Big_Caz/album/Thuggin_Without_A_Cause/track/Ride_Out_Ft._Snoopdogg%2C_Bino/", "icon400": "http://rdio-c.cdn3.rdio.com/album/c/2/2/000000000016922c/1/square-400.jpg", "artist": "Big Caz", "canDownload": true, "length": 1, "canTether": true, "albumKey": "a1479212"}, {"radioKey": "sr16560043", "baseIcon": "album/c/2/2/000000000016922c/1/square-200.jpg", "canDownloadAlbumOnly": true, "radio": {"type": "sr", "key": "sr16560043"}, "artistUrl": "/artist/Big_Caz/", "duration": 76, "album": "Thuggin Without A Cause", "isClean": false, "albumUrl": "/artist/Big_Caz/album/Thuggin_Without_A_Cause/", "shortUrl": "http://rd.io/x/Qiu-8Og/", "albumArtist": "Big Caz", "canStream": true, "embedUrl": "https://rd.io/e/Qiu-8Og/", "type": "t", "price": "0.99", "trackNum": 12, "albumArtistKey": "r533048", "key": "t16560043", "icon": "http://rdio-a.cdn3.rdio.com/album/c/2/2/000000000016922c/1/square-200.jpg", "canSample": true, "name": "So Sexy Ft. Snoopdogg, Down", "isExplicit": true, "artistKey": "r533048", "url": "/artist/Big_Caz/album/Thuggin_Without_A_Cause/track/So_Sexy_Ft._Snoopdogg%2C_Down/", "icon400": "http://rdio-c.cdn3.rdio.com/album/c/2/2/000000000016922c/1/square-400.jpg", "artist": "Big Caz", "canDownload": true, "length": 1, "canTether": true, "albumKey": "a1479212"}]


function musicCtrl($scope, $http) {
  console.log('rdio home ctrl')
  $scope.play_token = []

  $scope.tag_object = {'tagname':'', 'songname': '', 'radiokey':'', 'user_id':'mrgradea'}
  console.log($scope.rdio_tag)

  $scope.search_query= undefined

  $scope.results = fake_results


  $scope.search_rdio = function(){
    $http.get('/searchrdio?query='+$scope.search_query+'&type=Track').success(function(data){
      console.log(data);
      $scope.results = data.result.results
    })
  }

  $scope.rdio_tag = function(token, songname){
    console.log($scope.tag_object)
    console.log(songname)
    $scope.tag_object.radiokey = token
    $scope.tag_object.songname = songname
    $http.post('/addrdiotag', $scope.tag_object).success(function(data){
      console.log(data)
      $scope.tag_object.tagname = ''
      $scope.tagit = false

    })
  }

  $scope.play_rdio = function(token){
    console.log('play rdio')
    console.log(token)
    $scope.play_token.push(token)
    R.player.play({source:$scope.play_token[0]})
  }

  $scope.pause_rdio = function(){
    console.log('pause rdio')
    R.player.pause()
  }

  $scope.stop_rdio = function(){
    console.log('stop rdio')
    R.player.stop()
  }

  $scope.previous_rdio = function(){
    console.log('next rdio')
    R.player.previous()
  }

  $scope.next_rdio = function(){
    console.log('next rdio')
    R.player.next()
  }

}

