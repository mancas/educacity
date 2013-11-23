'use strict';

angular.module('educacityApp')
  .factory('pouchDB', function () {
    // Service logic
    var databaseName = "educacitySites";

    // Public API here
    return new PouchDB(databaseName);
  });
