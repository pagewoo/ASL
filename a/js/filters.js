'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {

		          var space_idx = length-end.length;
		          if (text.substr(length-end.length, 1) != ' ') {
		            space_idx = text.indexOf(' ', space_idx);
		          }
		          return text.substr(0, space_idx) + end;
            }

        };
    }).filter('commaFilter', function () {
        return function (text) {
            //console.log('filtering ' + text)
            var val = text.toLocaleString()
            //console.log('after filter ' + val)
            return val
        };
    }).
  filter('customer_neighborhoods', function () {
        return function (val) {
            var neighborhoods = Math.round(val*.666)
            return neighborhoods*10-10;
        };
  });


