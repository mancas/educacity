'use strict';

angular.module('educacityApp')
  .factory('util', function () {
    // Service logic

    // Public API here
    return {
      getObjectById: function (obj, val) {
        var object;
        for (var i in obj) {
            if (obj[i]._id == val) {
                object = obj[i];
                break;
            }
        }

        return object;
      }
    };
  });
