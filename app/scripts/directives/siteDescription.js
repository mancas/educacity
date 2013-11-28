'use strict';

angular.module('educacityApp')
  .directive('siteDescription', function () {
    return {
      templateUrl: 'views/templates/siteDescription.html',
      restrict: 'E'
    };
  });
