


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
    $http.post('/saveprofile/' + $scope.user_id, $scope.user_profile).success(function(data){
      console.log('profile saved')
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



  $scope.send_message = function() {

    var obj = {}
    obj.room_name = $scope.room_name;
    obj.message = {'message':$scope.new_command}

    $scope.new_command = '';

    $http.post('/sendmessage', obj).success(function(data){
      console.log('sent')
    });

  }


}

function mainNavCtrl($scope){

}

