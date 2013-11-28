'use strict';

angular.module('educacityApp')
  .directive('educacityTouchable', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var start;
        var end;

        var handleTouchStart = function (e) {
            start = Date.now();
            element.append(start);
        };

        var handleTouchEnd = function (e) {
            end = Date.now();
element.append((end-start)/1000);
            if (((end - start)/1000) >= 1) {
                e.preventDefault();
                e.stopPropagation();
                element.css('background-color', 'red');
            }
        };

        element.bind('touchstart', handleTouchStart);
        element.bind('touchend', handleTouchEnd);
        element.bind('click', handleTouchStart);
      }
    };
  });
