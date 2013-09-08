'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])


  // .directive('approveBannerRedirect', function(){
  //   var linkFn = function(scope, element, attrs) {
  //       element.find('banner').bind('load', function (event) {
  //         event.target.contentWindow.scrollTo(0,400);
  //         alert('iframe directive');
          
  //       });
  //   };
  //   return{
  //     link: function(scope, element, attributes){
  //       var el = angular.element(element)
  //       console.log(el)
  //     }
  //   }
  // })

  .directive('bannerImageButton', function() {
      return {
      link: function(scope, element, attributes) {

        var el = angular.element(element)
        var button = el.children()[0]

        el.css({
          position: 'relative',
          overflow: 'hidden',
          width: button.offsetWidth,
          height: button.offsetHeight
        })

        var fileInput = angular.element('<input type="file" name="file" style="margin-top:7px; width:370px" ng-model-instant id="bannerFileToUpload" multiple onchange="angular.element(this).scope().setFiles(this)" ></input>')
        fileInput.css({
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: '0',
          cursor: 'pointer'
        })

        el.append(fileInput)


      }
    }
  })




  .directive('pageImageButton', function() {
      return {
      link: function(scope, element, attributes) {

        var el = angular.element(element)
        var button = el.children()[0]

        el.css({
          position: 'relative',
          overflow: 'hidden',
          width: button.offsetWidth,
          height: button.offsetHeight
        })

        var fileInput = angular.element('<input type="file" name="file" style="margin-top:7px; width:370px" ng-model-instant id="backgroundFileToUpload" multiple onchange="angular.element(this).scope().setFiles(this)" ></input>')
        fileInput.css({
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: '0',
          cursor: 'pointer'
        })

        el.append(fileInput)


      }
    }
  })
  .directive('pageListingButton', function() {
      return {
      link: function(scope, element, attributes) {

        var el = angular.element(element)
        var button = el.children()[0]

        el.css({
          position: 'relative',
          overflow: 'hidden',
          width: 359,
          height: 35,
          cursor: 'pointer'
        })
        //var fileInput = angular.element('<input type="file" name="file" style="margin-top:7px" ng-model-instant id="backgroundFileToUpload" multiple onchange="angular.element(this).scope().setFiles(this)" ></input>')

        var fileInput = angular.element('<input type="file" name="file" style="margin-top:7px;" ng-model-instant id="listingFileToUpload" multiple onchange="angular.element(this).scope().realtor_setFiles(this, $index)"></input> ')
        fileInput.css({
          position: 'absolute',
          opacity: '0',
          height: 35,
          cursor: 'pointer'
        })

        el.append(fileInput)


      }
    }
  });

// angular.module('myApp.ta', []).
//   directive('textarea', function() {
//     return {
//         restrict: 'E',
//         link: function( scope , element , attributes ) {
//             var threshold    = 35,
//                 minHeight    = element[0].offsetHeight,
//                 paddingLeft  = element.css('paddingLeft'),
//                 paddingRight = element.css('paddingRight');

//             var $shadow = angular.element('<div></div>').css({
//                 position:   'absolute',
//                 top:        -10000,
//                 left:       -10000,
//                 width:      element[0].offsetWidth - parseInt(paddingLeft || 0) - parseInt(paddingRight || 0),
//                 fontSize:   element.css('fontSize'),
//                 fontFamily: element.css('fontFamily'),
//                 lineHeight: element.css('lineHeight'),
//                 resize:     'none'
//             });

//             angular.element( document.body ).append( $shadow );

//             var update = function() {
//                 var times = function(string, number) {
//                     for (var i = 0, r = ''; i < number; i++) {
//                         r += string;
//                     }
//                     return r;
//                 }

//                 var val = element.val().replace(/</g, '&lt;')
//                     .replace(/>/g, '&gt;')
//                     .replace(/&/g, '&amp;')
//                     .replace(/\n$/, '<br/>&nbsp;')
//                     .replace(/\n/g, '<br/>')
//                     .replace(/\s{2,}/g, function( space ) {
//                         return times('&nbsp;', space.length - 1) + ' ';
//                     });

//                 $shadow.html( val );

//                 element.css( 'height' , Math.max( $shadow[0].offsetHeight + threshold , minHeight ) );
//             }

//             scope.$on('$destroy', function() {
//                 $shadow.remove();
//             });

//             element.bind( 'keyup keydown keypress change' , update );
//             update();
//         }
//     }
// });





