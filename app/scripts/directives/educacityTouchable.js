'use strict';

angular.module('educacityApp')
  .directive('educacityTouchable', function (educacitySelectOnTouch) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var start;
        var end;
        var touchContinue = false;

        var handleTouchStart = function (e) {
            start = Date.now();
        };

        var handleTouchEnd = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var userInSelectedMode = false;
            var current = Date.now();

            userInSelectedMode = educacitySelectOnTouch.checkTime(current, start);

            if (userInSelectedMode) {
                //Check if the toolbar is active
                if (!educacitySelectOnTouch.isActiveToolbar()) {
                    educacitySelectOnTouch.showToolbar();
                }

                var index = $.inArray(element, educacitySelectOnTouch.getSelectedItems());
                if (index != -1) {
                    //The current element has been touched again so we need to remove it from selectedItems list
                    educacitySelectOnTouch.removeItem(index);
                } else {
                    //The current element has to be added to selectedItems list
                    educacitySelectOnTouch.addItem(element);
                }
            }
        };

        element.bind('touchstart', handleTouchStart);
        element.bind('touchend', handleTouchEnd);
        element.bind('click', handleTouchStart);
      }
    };
  });