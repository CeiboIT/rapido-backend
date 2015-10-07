'use strict';

var assert = require('chai').assert;
var smallEntityService = require('../app/services/smallEntity');
var specialtyService = require('../app/services/specialty');
var models = require('../app/models/index.js');
var sequelize_fixtures = require('sequelize-fixtures');

var newSmallEntity = {
	name: 'pequeña entidad',
	specialties: []
};

var loadFixtures = function () {
	console.log('loading fixtures ...');
	return sequelize_fixtures.loadFile('fixtures/specialty.json', models);
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
	models.sequelize.sync({force: true})
		.then(function () {
			return loadFixtures();
		})
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
				console.log(newSmallEntity);
				done();
			});
	});
});