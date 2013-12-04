'use strict';

angular.module('educacityApp')
  .service('tutorialPopover', function () {
    // Service logic
    var currentTutorial = 1;

    // Public API here
    this.nextPopover = function () {
      $('[data-tutorial="popover' + currentTutorial +'"]').first().popover('show');
    },

    this.dismissPopover =function () {
      $('[data-tutorial="popover' + currentTutorial +'"]').each(function(){
          $(this).popover('destroy');
      });
      currentTutorial = currentTutorial + 1;
    },

    this.resetPopoverCount = function () {
      currentTutorial = 1;
    }
  });
