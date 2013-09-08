


var host = window.location.hostname;
var STRIPE_KEY;
if ((host === 'localhost') || (host == '127.0.0.1')) {
  host = 'http://' + host + ':8082';
}

function pageCtrl($scope){
  //console.log('pricing');
}

function mainNavCtrl($scope){
  //console.log('pricing');
}

