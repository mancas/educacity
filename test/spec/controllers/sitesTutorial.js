'use strict';

describe('Controller: SitestutorialCtrl', function () {

  // load the controller's module
  beforeEach(module('educacityApp'));

  var SitestutorialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SitestutorialCtrl = $controller('SitestutorialCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
