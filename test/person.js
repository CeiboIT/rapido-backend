'use strict';

var assert = require('chai').assert;
var personService = require('../app/services/person');
var testUtils = require('./utils');

var newPerson = {
	firstname: 'Lalo',
	lastname: 'Landa',
	phone: '555-9932'
};

before(function (done) {
	testUtils.createTestDB()
		.then(function () {
			console.log('finished before');			
			done();
		});
});

describe('Person CRUD', function () {
	
	it('Should insert a new Person', function (done) {
		personService.create(newPerson)
			.then(function (response) {
				assert.isNotNull(response);
				assert.isNotNull(response.dataValues.id, 'Person not inserted');
				assert.equal(response.dataValues.firstname, newPerson.firstname, 'Wrong Person values');
				done();
			});
	});
});