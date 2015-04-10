'use strict';
function EqualHeightsDirective($timeout) {
  function link($scope, $element, attrs) {
    $timeout(function() {
      var $children        = $element.children(),
          currentMaxHeight = 0,
          numImagesLoaded  = 0,
          $images          = $element.find('img'),
          imageCount       = $images.length;

      if (imageCount > 0) {
        angular.forEach($images, function(image) {
          if (image.complete) {
            numImagesLoaded++;
          }
        });
      }

      if (numImagesLoaded === imageCount) {
        angular.forEach($children, function(child) {
          var childHeight = $(child).outerHeight();

          if (childHeight > currentMaxHeight) {
            currentMaxHeight = childHeight;
          }
        });

        // set heights
        $children.css({height: currentMaxHeight});
      }
    });
  }

  return {
    restrict: 'A',
    scope: {},
    link: link
  };
}

angular
  .module('ui.equalHeights', [])
  .directive('equalHeights', EqualHeightsDirective)
  .directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element.html(prettyPrintOne(element.html(),'',true));
        }
    };
  });
// .directive('prettify', ['$compile', '$timeout', function ($compile, $timeout) {
//     return {
//         restrict: 'E',
//         scope: {
//             target: '='
//         },
//         link: function (scope, element, attrs) {
//             var template = element.html();
//             var templateFn = $compile(template);
//             var update = function(){
//                 $timeout(function () {
//                     var compiled = templateFn(scope).html();
//                     var prettified = prettyPrintOne(compiled);
//                     element.html(prettified);
//                 }, 0);
//             }
//             scope.$watch('target', function () {
//                 update();
//             }, true);
//             update();
//         }
//     };
// }]);