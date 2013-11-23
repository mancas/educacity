'use strict';

describe('Service: pouchDB', function () {

  // load the service's module
  beforeEach(module('educacityApp'));

  // instantiate service
  var pouchDB;
  beforeEach(inject(function (_pouchDB_) {
    pouchDB = _pouchDB_;
  }));

  it('should return an instance of PouchDB', function (pouchDB) {
    expect(pouchDB.databaseName).toBe('educacitySites');
  });

});
