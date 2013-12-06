'use strict';

angular.module('educacityApp')
  .factory('pouchDB', function () {
    // Service logic
    var databaseName = "educacitySites";
    var db = new PouchDB(databaseName);
    var remoteCouch = 'https://educacity:dx4wteducacity@educacity.cloudant.com/educacity';

    db.replicate.from(remoteCouch, {continuous : true});

    return db;
  });
