'use strict';

angular.module('educacityApp')
  .service('webMessaging', function webMessaging($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var target = 'http://naturalblanc.com';
    var iframe;

    this.sendMessageSync = function () {
        iframe = $('#map-iframe').get(0);
        iframe.contentWindow.postMessage("sync", target);
    }

    this.getSiteData = function (event) {
        if (event.origin == target) {
            $rootScope.$broadcast('SITE_DATA_READY', event.data);
        }
    }
  });
