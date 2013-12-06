'use strict';

angular.module('educacityApp')
  .directive('appHeader', function () {
    return {
      templateUrl: "views/templates/header.html",
      restrict: 'E',
      replace: true,
      scope: {
        title : '@',
        home : '@',
        button : '@',
        eventHandler: '&ngFunction',
        trash : '@',
        star : '@'
      }
    };
  });
