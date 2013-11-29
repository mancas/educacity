'use strict';

describe('Directive: educacityGmap', function () {

  // load the directive's module
  beforeEach(module('educacityApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<educacity-gmap></educacity-gmap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the educacityGmap directive');
  }));
});
