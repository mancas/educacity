'use strict';

describe('Service: Tutorialpopover', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var Tutorialpopover;
  beforeEach(inject(function (_Tutorialpopover_) {
    Tutorialpopover = _Tutorialpopover_;
  }));

  it('should do something', function () {
    expect(!!Tutorialpopover).toBe(true);
  });

});
