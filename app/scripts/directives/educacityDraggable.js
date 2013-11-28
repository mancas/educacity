'use strict';

angular.module('educacityApp')
  .directive('educacityDraggable', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        //Indicate the element is draggable
        element.attr('draggable', 'true');

        var id = element.attr('id');

        var handleDragStart = function (e)
        {
            if (isNaN(id)) {
                id = element.attr('id');
            }
            e.dataTransfer.setData('text/plain', id);
        };

        var handleDragEnd = function (e) {
            $rootScope.$emit('EDUCACITY-DRAG-END');
        };

        element.bind('dragstart', handleDragStart);
        element.bind('dragend', handleDragEnd);
      }
    };
  });
