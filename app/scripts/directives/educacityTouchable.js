'use strict';

angular.module('educacityApp')
  .directive('educacityTouchable', function (educacitySelectOnTouch, tutorialPopover) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var start;
        var timer;

        var handleTouchStart = function (e) {
            var userInSelectedMode = false;

            userInSelectedMode = educacitySelectOnTouch.getSelectedMode();

            if (!userInSelectedMode) {
                start = Date.now();
                timer = setTimeout(function (event) { 
                    educacitySelectOnTouch.checkTime(start); 
                }, educacitySelectOnTouch.getMaxTime());
            }
        };

        var handleTouchEnd = function (e) {
            var userInSelectedMode = false;

            userInSelectedMode = educacitySelectOnTouch.getSelectedMode();
            clearTimeout(timer);

            if (userInSelectedMode) {
                e.preventDefault();
                e.stopPropagation();

                //Check if the toolbar is active
                if (!educacitySelectOnTouch.isActiveToolbar()) {
                    educacitySelectOnTouch.showToolbar();
                    //If the user is playing with the tutorial, we need to show the nextPopover
                    if (attrs.tutorial) {
                        tutorialPopover.dismissPopover();
                        tutorialPopover.nextPopover();
                    }
                }

                var index = $.inArray(element, educacitySelectOnTouch.getSelectedItems());
                if (index != -1) {
                    //The current element has been touched again so we need to remove it from selectedItems list
                    educacitySelectOnTouch.removeItem(index);
                } else {
                    //The current element has to be added to selectedItems list
                    educacitySelectOnTouch.addItem(element);
                }

                return false;
            }
        };

        element.bind('touchstart', handleTouchStart);
        element.bind('touchend touchcancel touchleave', handleTouchEnd);
        //element.bind('mousedown', handleTouchStart);
        //element.bind('mouseup', handleTouchEnd);
        //element.bind('click', handleTouchStart);
      }
    };
  });
