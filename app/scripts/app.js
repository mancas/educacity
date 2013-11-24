'use strict';

angular.module('educacityApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'SitesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
