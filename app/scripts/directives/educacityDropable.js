'use strict';

angular.module('educacityApp')
  .directive('educacityDropable', function ($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        /*element.on('dragenter dragstart dragend dragleave dragover drag drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });*/

        var handleDragOver = function (e) {
            if (e.preventDefault)
                e.preventDefault(); //That's necessary. Allow us to drop the element

            if (e.stopPropagation)
                e.stopPropagation();

            e.dataTransfer.dropEffect = 'move';

            return false;
        };

        var handleDragEnter = function (e) {
            $(e.target).parent('a').addClass('dragOver');
        };

        var handleDragLeave = function (e) {
            $(e.target).parent('a').removeClass('dragOver');
        };

        var handleDrop = function (e) {
            if (e.preventDefault)
                e.preventDefault(); //That's necessary. Allow us to drop the element

            if (e.stopPropagation)
                e.stopPropagation();

            var source = $('#' + e.dataTransfer.getData('text/plain'));
            var target = $(e.target);
            target.parent('a').removeClass('dragOver');

            //This allow us to comunicate with the parent scope
            $rootScope.$emit('EDUCACITY-DROP', source, target);

            return false;
        };

        $rootScope.$on('EDUCACITY-DRAG-END', function(e) {
            element.parent('a').removeClass('dragOver');
        });

        element.bind('dragover', handleDragOver);
        element.bind('dragenter', handleDragEnter);
        element.bind('dragleave', handleDragLeave);
        element.bind('drop', handleDrop);
      }
    };
  });
