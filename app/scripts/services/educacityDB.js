'use strict';

angular.module('educacityApp')
  .factory('educacityDB', function ($q, pouchDB, $rootScope) {
    // Service logic
    var entry;
    var entries = new Array();
    var server = 'http://educacity.iriscouch.com/educacity/_design/sites/_view/educacitySites';

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

        pouchDB.put(data, function (err, response) {
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

      //Fire an event if the specific document exists
      exists : function (id) {
        var deferred = $q.defer();
        var promise;

        pouchDB.get(id.toString(), function (err, response) {
          $rootScope.$apply(function () {
            if (err) {
              deferred.resolve(err);
            } else {
              deferred.resolve(response);
            }
          });
        });

        promise = deferred.promise;

        promise.then(function (data) {
          if (data.error == 'not_found' || data.status == 404) {
            $rootScope.$broadcast('NOT_EXISTS');
          } else {
            $rootScope.$broadcast('EXISTS');
          }
        });
      },

      //Retrieve a simple doc
      get : function (id) {
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

        promise.then(function (data) {
          entry = data;
        });

        return entry;
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
          console.info('delete');
          pouchDB.remove(doc);
        });
      },

      //Get the attachment from the doc
      getAttachment: function (id) {
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
          var attachmentId;
          $.each(doc._attachments, function (key, val) { attachmentId = key;});

          pouchDB.getAttachment(id.toString(), attachmentId, function (err, response) {
            if (!err) {
              var blob = response;
              var imageSrc = URL.createObjectURL(blob);
              $('div[data-doc="' + id +'"] > div > img').attr('src', imageSrc);
              URL.revokeObjectURL(imageSrc);
            }
          });
        });
      },

      //Get the source of a specific image from the doc and assign it to an img element
      setAttachment: function (id, elementId) {
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
          var attachmentId;
          $.each(doc._attachments, function (key, val) { attachmentId = key;});
console.info(doc._id);

          pouchDB.getAttachment(id.toString(), attachmentId, function (err, response) {
console.info(err);
console.info(response);
            if (!err) {
              var blob = response;
console.info($('img#' + elementId));
              var imageSrc = URL.createObjectURL(blob);
              $('img#' + elementId).attr('src', imageSrc);
              URL.revokeObjectURL(imageSrc);
            }
          });
        });
      },

      //Retrieve data from couchBase server
      getDataServer: function () {
        var request;

        request = new XMLHttpRequest({mozSystem : true});
        request.open('GET', server, true);
        request.send();

        request.onreadystatechange = function () {
          if (request.readyState < 4) { // while waiting response from server
            //document.getElementById('div1').innerHTML = "Loading...";
          } else {
            if (request.readyState === 4) { // 4 = Response from server has been completely loaded.
              if (request.status == 200 && request.status < 300)  // http status between 200 to 299 are all successful
                return JSON.parse(request.response).rows;
            }
          }
        }

      }
    };
  });
