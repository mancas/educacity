'use strict';

describe('Service: Educacitydb', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var Educacitydb;
  beforeEach(inject(function (_Educacitydb_) {
    Educacitydb = _Educacitydb_;
  }));

  it('should do something', function () {
    expect(!!Educacitydb).toBe(true);
  });

});
