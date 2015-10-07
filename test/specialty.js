'use strict';

var assert = require('chai').assert;
var specialtyService = require('../app/services/specialty');
var testUtils = require('./utils');

var SPECIALTIES_FIXTURE_LENGTH = 2;

before(function (done) {
	testUtils.createTestDB()
		.then(function () {
			done();
		});
});

describe('Specialty retrieve', function () {

	it('Should retrieve all Specialties', function (done) {
		// specialties are loaded by fixture
		specialtyService.findAll()
			.then(function (specialties) {
				assert.isNotNull(specialties);
				assert.equal(specialties.length, SPECIALTIES_FIXTURE_LENGTH);
				done();
			});
	});
});