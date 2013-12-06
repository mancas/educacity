'use strict';

angular.module('educacityApp')
  .directive('siteFavorite', function ($rootScope) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('click', function (event) {
            event.preventDefault();
            var alertElement = $('.alert');
            //Toggle element class
            if (element.hasClass('bookmark')) {
                element.removeClass('bookmark');
                element.addClass('bookmarked');
                $rootScope.$broadcast('ADD_SITE_FAVORITE');
                alertElement.children('p').text('Añadido a Mis Sitios');
            } else {
                element.removeClass('bookmarked');
                element.addClass('bookmark');
                $rootScope.$broadcast('DELETE_SITE_FAVORITE');
                alertElement.children('p').text('Eliminado de Mis Sitios');
            }

            alertElement.show();
        });
      }
    };
  });
