'use strict';

angular.module('educacityApp')
  .controller('CityCtrl', function ($scope, util, webMessaging, moveScreen, educacityDB) {
    //This method changes the size of the iframe which contains the google map
    $scope.init = util.resizeMap;

    //Initialize the events
    $scope.$on('$viewContentLoaded', function () {
        window.addEventListener('message', webMessaging.getSiteData, false);
    });

    //When user click on any marker, we have to set up the information about the site required
    $scope.$on('SITE_DATA_READY', function (event, data) {
        $scope.request = data;

        $scope.$apply(function () {
            //If is favorite site then, need to change the fav icon
            //educacityDB.exists($scope.request._id);
            educacityDB.replicateBD();
            //educacityDB.setAttachment($scope.request._id);
            moveScreen.setTitle($scope.request.header);
            //Load the img
            //$scope.setImage($scope.request, 'site-desc-img');
            //$scope.backToCurrent();
        });
    });

    $scope.setImage = function (doc, elementId) {
        educacityDB.add(doc);
        educacityDB.setAttachment(doc._id, elementId);
        educacityDB.delete(doc._id);
    }

    //When this event is fired, we have to save the current doc
    $scope.$on('ADD_SITE_FAVORITE', function (event) {
        educacityDB.add($scope.request);
    });

    //When this event is fired, we have to remove the current doc from the offline DB
    $scope.$on('DELETE_SITE_FAVORITE', function (event) {
        educacityDB.delete($scope.request._id);
    });

    $scope.$on('EXISTS', function (event) {
        moveScreen.changeFavIcon();
        educacityDB.setAttachment($scope.request._id, 'site-desc-img');
    });

    $scope.$on('NOT_EXISTS', function (event) {
        educacityDB.add($scope.request);
        educacityDB.setAttachment($scope.request._id, 'site-desc-img');
        setTimeout(function () { educacityDB.delete($scope.request._id)}, 5000);
    });

    $scope.backToCurrent = moveScreen.fadeIn;

    $scope.currentToBack = moveScreen.fadeOut;
    educacityDB.delete(1);
  });
