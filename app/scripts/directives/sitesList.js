'use strict';

angular.module('educacityApp')
  .directive('sitesList', function () {
    return {
      templateUrl: 'views/templates/sitesList.html',
      restrict: 'E',
      scope : { sites : "=" }
    };
  });
