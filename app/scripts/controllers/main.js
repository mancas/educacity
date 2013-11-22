'use strict';

angular.module('educacityApp')
  .controller('MainCtrl', function ($scope, educacityDB) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.entry = {
                id : 2,
                title : "Testing",
                description : "Testing entry",
                image : "img/blah.png",
                street : "Desengaño 21",
                latitude : 4.058428,
                longitude : -30.2546258
            };
    educacityDB.createDB();
    educacityDB.showEntries();
    $scope.entries = educacityDB.getData();
    console.info($scope.entries);
    for (entry in $scope.entries) {
        console.info(entry);
    }
  });
