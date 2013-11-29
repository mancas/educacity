'use strict';

describe('Service: Educacitymaputil', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var Educacitymaputil;
  beforeEach(inject(function (_Educacitymaputil_) {
    Educacitymaputil = _Educacitymaputil_;
  }));

  it('should do something', function () {
    expect(!!Educacitymaputil).toBe(true);
  });

});
