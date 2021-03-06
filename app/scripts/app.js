'use strict';

angular.module('educacityApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $compileProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sites', {
        templateUrl: 'views/sites.html',
        controller: 'SitesCtrl'
      })
      .when('/city', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl'
      })
      .when('/sites-tutorial', {
        templateUrl: 'views/sitesTutorial.html',
        controller: 'SitesTutorialCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|app):/);
  });
