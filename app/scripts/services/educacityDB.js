'use strict';

angular.module('educacityApp')
  .factory('educacityDB', function ($q, pouchDB, $rootScope) {
    // Service logic
    var entries = new Array();

    // Public API here
    return {
      //Show all entries stored in the database
      getAll: function() {
        var deferred = $q.defer();
        var promise;

        pouchDB.allDocs({include_docs: true, descending: true}, function (err, response) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(response);
            }
          });
        });

        promise = deferred.promise;

        promise.then(function (data) {
          data.rows.forEach(function (row) {
              entries.push(row.doc);
          });
        });

        return entries;
      },

      //Add a new entry
      add : function (data) {
        var deferred = $q.defer();
        var id = data.id;
        var entry = {
          _id : id.toString(),
          title : data.title,
          description : data.description,
          image : data.image,
          street : data.street,
          latitude : data.latitude,
          longitude : data.longitude
        };

        pouchDB.put(entry, function (err, response) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(response);
            }
          });
        });

        return deferred.promise;
      },

      get : function (id) {
        var deferred = $q.defer();

        pouchDB.get(id.toString(), function (err, response) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(response);
            }
          });
        });

        return deferred.promise;
      },

      //Delete an exisiting entry
      delete : function (id) {
        var deferred = $q.defer();
        var promise;

        pouchDB.get(id.toString(), function (err, response) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.reject(err);
            } else {
              deferred.resolve(response);
            }
          });
        });

        promise = deferred.promise;

        promise.then(function (doc) {
          pouchDB.remove(doc);
        });
      }
    };
  });
