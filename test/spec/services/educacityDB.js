'use strict';

describe('Service: educacityDB', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var educacityDB;
  beforeEach(inject(function (_educacityDB_) {
    educacityDB = _educacityDB_;
  }));

  it('should', function () {
    expect(!!educacityDB).toBe(true);
  });

});
