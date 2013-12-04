'use strict';

angular.module('educacityApp')
  .controller('CityCtrl', function ($scope, util, webMessaging, moveScreen) {
    $scope.init = util.resizeMap;

    $scope.$on('$viewContentLoaded', function () {
        window.addEventListener('message', webMessaging.getSiteData, false);
    });

    $scope.$on('SITE_DATA_READY', function (event, data) {
        $scope.request = data;
        $scope.$apply(function () {
            moveScreen.setTitle($scope.request.header);
            $scope.backToCurrent();
        });
    });

    $scope.backToCurrent = moveScreen.fadeIn;

    $scope.currentToBack = moveScreen.fadeOut;
  });
