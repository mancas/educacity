'use strict';

describe('Service: Movescreen', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var Movescreen;
  beforeEach(inject(function (_Movescreen_) {
    Movescreen = _Movescreen_;
  }));

  it('should do something', function () {
    expect(!!Movescreen).toBe(true);
  });

});
