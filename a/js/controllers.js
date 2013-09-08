


var host = window.location.hostname;
var STRIPE_KEY;
if ((host === 'localhost') || (host == '127.0.0.1')) {
  host = 'http://' + host + ':8082';
}

function pageCtrl($scope, $http){

  $scope.messages = [];
  $scope.home_page = host + '/b/index.html#';
  $scope.room_name = 'lobby'

  $scope.enter_room = function() {

    $http.get('/enterroom/' + $scope.room_name).success(function(data){
      $scope.room_token = data;

      channel = new goog.appengine.Channel($scope.room_token);
      socket = channel.open();
      socket.onopen = $scope.onOpened;
      socket.onmessage = $scope.onMessage;
      socket.onerror = $scope.onError;
      socket.onclose = $scope.onClose;

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

