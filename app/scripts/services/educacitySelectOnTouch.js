'use strict';

angular.module('educacityApp')
  .service('educacitySelectOnTouch', function educacitySelectOnTouch() {
    // AngularJS will instantiate a singleton by calling "new" on this function
        const TIME_TO_EDIT = 750;
        var selectedMode = false;
        var selectedItems = [];
        var toolbar = false;

        this.getMaxTime = function() {
            return TIME_TO_EDIT;
        }

        this.getSelectedMode = function() {
            return selectedMode;
        }

        this.selectedModeOn = function() {
            selectedMode = true;
            navigator.vibrate(200);
        }

        this.selectedModeOff = function () {
            selectedMode = false;
        }

        this.checkTime = function (init) {
            var current = Date.now();
            var secs = (current - init);

            if (!selectedMode) {
                if (secs >= TIME_TO_EDIT) {
                    navigator.vibrate(200);
                    selectedMode = true;
                }
            }

            return selectedMode;
        }

        this.getSelectedItems = function () {
            return selectedItems;
        }

        this.addItem = function (item) {
            if (selectedMode) {
                item.addClass('selected');
                selectedItems.push(item);
            }
        }

        this.removeItem = function (item_index) {
            if (selectedMode) {
                var items_removed = selectedItems.splice(item_index, 1);

                items_removed.forEach(function (item) {
                    item.removeClass('selected');
                });
            }
        }

        this.removeAllItems = function () {
            if (!selectedMode) {
                selectedItems.forEach(function (item) {
                    item.removeClass('selected');
                });
                selectedItems = [];
            }
        }

        this.showToolbar = function () {
            if (selectedMode) {
                $('div[role="toolbar"]').toggleClass('hide');
                toolbar = true;
            }
        }

        this.hideToolbar = function () {
            if (selectedMode) {
                $('div[role="toolbar"]').toggleClass('hide');
                toolbar = false;
            }
        }

        this.isActiveToolbar = function () {
            return toolbar;
        }
  });
