'use strict';

var assert = require('chai').assert;
var smallEntityService = require('../app/services/smallEntity');
var specialtyService = require('../app/services/specialty');
var testUtils = require('./utils');

var newSmallEntity = {
	name: 'pequeña entidad',
	specialties: []
};

var populateSmallEntity = function () {
	console.log('populating SmallEntity');
	// populate the new smallEntity with specialties retrieved from db
	return specialtyService.findAll()
		.then(function (specialties) {
			console.log('specialties inserted', specialties.length);
			specialties.forEach(function (specialty) {
				newSmallEntity.specialties.push(specialty.dataValues.id);
			});
		});
};

before(function (done) {
	testUtils.createTestDB()
		.then(function () {
			return populateSmallEntity();
		})
		.then(function (){
			console.log('finished before');			
			done();
		});
});

describe('SmallEntity CRUD', function () {
	
	it('Should insert a new SmallEntity', function (done) {
		smallEntityService.create(newSmallEntity)
			.then(function (response) {
				assert.isNotNull(response);
				assert.isNotNull(response.dataValues.id, 'SmallEntity not inserted');
				assert.equal(response.dataValues.name, newSmallEntity.name, 'Wrong SmallEntity values');
				assert.equal(response.getSpecialties().lenght, newSmallEntity.specialties.lenght, 'Wrong specialties');
				done();
			});
	});
});