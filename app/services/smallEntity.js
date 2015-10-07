'use strict';

var models = require('../models');
var service = {};

service.findAll = function () {
	return models.SmallEntity.findAll()
		.success(function (response) {
			return response;
		})
		.fail(function (err) {
			console.error(err);
			return false;
		});
};

service.create = function (smallEntity) {
	// first, create a non-persistent entity
	var newSmallEntity = models.SmallEntity.build(smallEntity);
	// set associated values
	newSmallEntity.setSpecialties(smallEntity.specialties);

	// persist into db
	return newSmallEntity.save()
		.then(function (saved) {
			return saved;
		})
		.fail(function (err) {
			console.error('Error saving SmallEntity', err);
			return false;
		});
};

module.exports = service;