'use strict';

angular.module('educacityApp')
  .service('educacityDB', function educacityDB() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var database;
    var remoteCouch = false;

    this.createDB = function()
    {
        database = new PouchDB('educacitySites');
        remoteCouch = false;
    }

    this.addEntry = function (data)
    {
        if (database) {
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

            database.put(entry, function callback (err, response) {
                if (!err) {
                    console.info(response);
                } else {
                    console.info(err);
                }
            });
        }
    }

    this.showEntries = function ()
    {
        if (database) {
            database.allDocs({include_docs: true, descending: true}, function (err, response) {
                data = response.rows;
            });
        }
    }

    this.getDB = function () {
        return database;
    }
  });
