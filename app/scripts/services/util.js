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
      },

      resizeMap: function() {
        var gmap = $('#map-iframe');
        var win = $(window);
        var header = gmap.prev('nav');

        gmap.height(win.height() - header.height());

        win.resize(function(){
            var new_gmap_size = win.height() - header.height();
            gmap.height(win.height() - header.height());
        });
      }
    };
  });
