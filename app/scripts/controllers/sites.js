'use strict';

angular.module('educacityApp')
  .controller('SitesCtrl', function ($scope, educacityDB, moveScreen) {
    $scope.sites = educacityDB.getAll();

    $scope.currentToLeft = moveScreen.fadeIn;

    $scope.currentToRight = moveScreen.fadeOut;

    $scope.loadData = function (index) {
        $scope.request = $scope.sites[index];
        moveScreen.setTitle($scope.request.title);
        $scope.currentToLeft();
    }

    
  });
