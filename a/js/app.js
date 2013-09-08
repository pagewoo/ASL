var host = window.location.hostname;
if ((host === 'localhost') || (host == '127.0.0.1')) {
  host = 'http://' + host + ':8082';
} else {
  host = 'http://' + host;
}

var nearApp = angular.module('myApp', ['uiSlider', 'myApp.filters', 'myApp.services', 'myApp.directives', 'ui.keypress', 'ui.utils', 'ui.bootstrap', 'ui.bootstrap.dialog']).
  config(['$routeProvider', function($routeProvider, $location) {
    $routeProvider.when('/page', {templateUrl: 'partials/page.html', controller: pageCtrl});
    $routeProvider.when('/music', {templateUrl: 'partials/music.html', controller: musicCtrl});


    $routeProvider.otherwise({redirectTo: '/page'});
  }]);

nearApp.run(function($rootScope, $http){

    $rootScope.listOfStuff = function(message){
        var food = ["Banana", "Orange", "Apple", "Mango"];
        var message = message;
        food.push(message)
        console.log(food)
        return food
    }

})

nearApp.directive('toggle', function() {
    return function(scope, elem, attrs) {
        scope.$on('event:toggle', function(button) {
            elem.slideToggle();
        });
    };
});



