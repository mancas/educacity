'use strict';

angular.module('educacityApp')
  .directive('appHeader', function () {
    return {
      templateUrl: "views/templates/header.html",
      restrict: 'E',
      scope: {
        city : '@'
      }
    };
  });
