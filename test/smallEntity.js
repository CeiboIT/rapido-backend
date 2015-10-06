'use strict';

var assert = require('chai').assert;
var smallEntityService = require('../app/services/smallEntity');
var models = require('../app/models/index.js');

beforeEach(function (done) {

	models.sequelize.sync().then(function () {
		done();
	});
});

describe('SmallEntity', function () {

	var newSmallEntity = {
		name: 'pequeña entidad'
	};

	it('Should insert a new SmallEntity', function (done) {
		smallEntityService.create(newSmallEntity)
			.then(function (response) {
				assert.isNotNull(response);
				assert.isNotNull(response.dataValues.id);
				assert.equal(response.dataValues.name, newSmallEntity.name);
				done();
			});
	});
});