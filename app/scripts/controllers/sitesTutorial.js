'use strict';

angular.module('educacityApp')
  .controller('SitesTutorialCtrl', function ($scope, moveScreen, util, educacitySelectOnTouch, tutorialPopover, $location) {
    $scope.sites =  [];

    $scope.$on('$viewContentLoaded', function () {
        tutorialPopover.nextPopover();
        $('.btn').on('click', $scope.nextPopover);
        $scope.addData();
    })

    $scope.nextPopover = function () {
        tutorialPopover.dismissPopover();
        tutorialPopover.nextPopover();
    }

    $scope.backToCurrent = moveScreen.fadeIn;

    $scope.currentToBack = function () {
        moveScreen.fadeOut();
        $scope.nextPopover();
    }

    $scope.loadData = function (index) {
        var element = $('#' + index);
        $scope.nextPopover();
        $scope.request = util.getObjectById($scope.sites, element.attr('data-doc'));
        moveScreen.setTitle($scope.request.header);
        $scope.backToCurrent();
    };

    $scope.dismiss = function () {
      educacitySelectOnTouch.hideToolbar();
      educacitySelectOnTouch.selectedModeOff();
      educacitySelectOnTouch.removeAllItems();
    }

    $scope.deleteDocs = function () {
      var docs = educacitySelectOnTouch.getSelectedItems();

      docs.forEach(function (doc) {
        var id = doc.attr('data-doc');
        var index = util.getObjectIndexById($scope.sites, id);
        $scope.sites.splice(index, 1);
      });

      $scope.nextPopover();
    }

    $scope.goToMenu = function () {
        tutorialPopover.dismissPopover();
        tutorialPopover.resetPopoverCount();
        $location.path('/');
    }

    var entry = {
          _id : 7,
          header: 'Giralda',
          title : 'Giralda',
          description : 'Giralda es el nombre que recibe el campanario de la Catedral de Santa María de la Sede de la ciudad de Sevilla, en Andalucía (España). Los dos tercios inferiores de la torre corresponden al alminar de la antigua mezquita de la ciudad, de finales del siglo XII, en la época almohade, mientras que el tercio superior es una construcción sobrepuesta en época cristiana para albergar las campanas. En su cúspide se halla una bola llamada tinaja sobre la cual se alza el Giraldillo, estatua que hace las funciones de veleta y que fue la escultura en bronce más grande del Renacimiento europeo y que por extensión vino a dar nombre a toda la torre, pues históricamente se comenzó a denominar Giralda (literalmente "que gira") a la veleta.',
          street : 'Avenida de la constitucion',
          image : 'img/giralda.png',
          latitude : '',
          longitude : ''
        };

    var entry2 = {
          _id : 1,
          header: 'Torre del Oro',
          title : 'Torre del Oro',
          description : 'La Torre del Oro de Sevilla es una torre albarrana situada en el margen izquierdo del río Guadalquivir, en la ciudad de Sevilla, junto a la plaza de toros de la Real Maestranza. Su altura es de 36 metros. Posiblemente su nombre en árabe era Bury al-dahab,1 2 3 Borg al Azahar,4 o Borg-al-Azajal5 en referencia a su brillo dorado que se reflejaba sobre el río. Durante las obras de restauración de 2005, se demostró que este brillo, que hasta entonces se atribuía a un revestimiento de azulejos, era debido a una mezcla de mortero cal y paja prensada.',
          street : 'Paseo de Cristóbal Colón, s/n, 41001 Sevilla',
          image : 'img/torreoro.jpg',
          latitude : '',
          longitude : ''
        };

    $scope.addData = function () {
        $scope.sites.push(entry);
        $scope.sites.push(entry2);
    }
  });
