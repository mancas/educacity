'use strict';

angular.module('educacityApp')
  .factory('moveScreen', function () {
    // Service logic

    // Public API here
    return {
      currentToLeft: function () {
        $('#pointOfInterest').attr('class', 'current');
        $('[data-position="current"]').attr('class', 'left');
      },

      currentToRight : function () {
        $('#pointOfInterest').attr('class', 'right');
        $('[data-position="current"]').attr('class', 'current');
      },

      fadeIn : function () {
        $('#pointOfInterest').attr('class', 'fade-in');
        $('[data-position="current"]').attr('class', 'hide');
      },

      fadeOut: function () {
        $('#pointOfInterest').attr('class', 'fade-out hide');
        $('[data-position="current"]').attr('class', 'show');
      },

      setTitle: function (title) {
        $('#btn-back').parent('li').next('li').children('h1').text(title);;
      },

      changeFavIcon: function () {
        var element = $('#btn-star').children('span');
        if (element.hasClass('bookmark')) {
            element.removeClass('bookmark');
            element.addClass('bookmarked');
        }
      }
    };
  });
