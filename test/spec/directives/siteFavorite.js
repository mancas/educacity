'use strict';

describe('Directive: siteFavorite', function () {

  // load the directive's module
  beforeEach(module('educacityApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<site-favorite></site-favorite>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the siteFavorite directive');
  }));
});
