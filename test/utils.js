'use strict';

var models = require('../app/models/index.js');
var sequelize_fixtures = require('sequelize-fixtures');
var utils = {};

var loadFixtures = function () {
	console.log('loading fixtures ...');
	return sequelize_fixtures.loadFile('fixtures/specialty.json', models);
};

utils.createTestDB = function () {
	// create a test database, drop all tables and create all tables based on models
	return models.sequelize.sync({force: true})
		.then(function () {
			return loadFixtures();
		});
};

module.exports = utils;

