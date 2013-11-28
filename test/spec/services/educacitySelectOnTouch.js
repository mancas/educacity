'use strict';

describe('Service: Educacityselectontouch', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var Educacityselectontouch;
  beforeEach(inject(function (_Educacityselectontouch_) {
    Educacityselectontouch = _Educacityselectontouch_;
  }));

  it('should do something', function () {
    expect(!!Educacityselectontouch).toBe(true);
  });

});
