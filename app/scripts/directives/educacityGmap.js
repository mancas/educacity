'use strict';

angular.module('educacityApp')
  .directive('educacityGmap', function (educacityMapUtil) {
    return {
      template: '<div id="educacity-map"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        educacityMapUtil.initMap(element);
      }
    };
  });
