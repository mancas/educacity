'use strict';

angular.module('educacityApp')
  .directive('educacityGmap', function (webMessaging) {
    return {
      template: '<iframe id="map-iframe" src="http://www.naturalblanc.com/educacity/#/google-map"></iframe>',
      restrict: 'E',
      replace : true,
      link: function postLink(scope, element, attrs) {
        $(document).ready(function() {
          webMessaging.sendMessageSync();
        });
      }
    };
  });
