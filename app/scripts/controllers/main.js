'use strict';

angular.module('educacityApp')
  .controller('MainCtrl', function ($scope, educacityDB) {
    $scope.entry = {
                id : 5,
                title : "Prueba",
                description : "Testing entry",
                image : "img/blah.png",
                street : "Desengaño 21",
                latitude : 4.058428,
                longitude : -30.2546258
            };
    //educacityDB.add($scope.entry);
    //educacityDB.delete(4);
  });
