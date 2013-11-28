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
      },

      getObjectIndexById: function (objs, val) {
        var index;
        for (var i in objs) {
            if (objs[i]._id == val) {
                index = i;
                break;
            }
        }

        return index;
      }
    };
  });
