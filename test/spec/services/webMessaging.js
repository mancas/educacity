'use strict';

describe('Service: Webmessaging', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var Webmessaging;
  beforeEach(inject(function (_Webmessaging_) {
    Webmessaging = _Webmessaging_;
  }));

  it('should do something', function () {
    expect(!!Webmessaging).toBe(true);
  });

});
