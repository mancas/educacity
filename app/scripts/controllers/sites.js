'use strict';

angular.module('educacityApp')
  .controller('SitesCtrl', function ($scope, $rootScope, educacityDB, moveScreen, util) {
    //That's need to resolve some conflicts with the dataTransfer property
    jQuery.event.props.push('dataTransfer');
    $scope.sites = educacityDB.getAll();
    $rootScope.educacityDnD = {source : '', target : ''};

    $scope.backToCurrent = moveScreen.fadeIn;

    $scope.currentToBack = moveScreen.fadeOut;

    $scope.loadData = function (index) {
        var element = $('#' + index);

        $scope.request = util.getObjectById($scope.sites, element.attr('data-doc'));
        moveScreen.setTitle($scope.request.header);
        $scope.backToCurrent();
    };

    $rootScope.$on('EDUCACITY-DROP', function (event, source, target) {
        var id = source.attr('data-doc');
        var index = source.attr('id');
        educacityDB.delete(id);
        $scope.sites.splice(index, 1);
        $scope.$digest();
    });

    /** TESTING **/

    var entry = {
          id : 7,
          header: 'Giralda',
          title : 'Giralda',
          description : 'Giralda es el nombre que recibe el campanario de la Catedral de Santa María de la Sede de la ciudad de Sevilla, en Andalucía (España). Los dos tercios inferiores de la torre corresponden al alminar de la antigua mezquita de la ciudad, de finales del siglo XII, en la época almohade, mientras que el tercio superior es una construcción sobrepuesta en época cristiana para albergar las campanas. En su cúspide se halla una bola llamada tinaja sobre la cual se alza el Giraldillo, estatua que hace las funciones de veleta y que fue la escultura en bronce más grande del Renacimiento europeo y que por extensión vino a dar nombre a toda la torre, pues históricamente se comenzó a denominar Giralda (literalmente "que gira") a la veleta.',
          street : 'Avenida de la constitucion',
          image : 'img/giralda.png',
          latitude : '',
          longitude : ''
        };

    var entry2 = {
          id : 1,
          header: 'Torre del Oro',
          title : 'Torre del Oro',
          description : 'La Torre del Oro de Sevilla es una torre albarrana situada en el margen izquierdo del río Guadalquivir, en la ciudad de Sevilla, junto a la plaza de toros de la Real Maestranza. Su altura es de 36 metros. Posiblemente su nombre en árabe era Bury al-dahab,1 2 3 Borg al Azahar,4 o Borg-al-Azajal5 en referencia a su brillo dorado que se reflejaba sobre el río. Durante las obras de restauración de 2005, se demostró que este brillo, que hasta entonces se atribuía a un revestimiento de azulejos, era debido a una mezcla de mortero cal y paja prensada.',
          street : 'Paseo de Cristóbal Colón, s/n, 41001 Sevilla',
          image : 'img/torreoro.jpg',
          latitude : '',
          longitude : ''
        };

        $scope.addData = function () {
            educacityDB.add(entry);
            educacityDB.add(entry2);
            $scope.$digest();
        }
    //educacityDB.add(entry);
  });
