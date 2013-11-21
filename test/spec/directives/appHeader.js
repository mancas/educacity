'use strict';

describe('Directive: appHeader', function () {

    // load the directive's module
    beforeEach(module('educacityApp'));
    //load the template
    beforeEach(module('app/views/templates/header.html'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.city = "Sevilla";
    }));

    it('should load app header and set city to Sevilla', inject(function ($compile) {
        element = angular.element('<app-header city=\"{{city}}\"></app-header>');
        element = $compile(element)(scope);
        scope.$digest();
        expect(element.text()).toContain('Sevilla');
    }));
});
