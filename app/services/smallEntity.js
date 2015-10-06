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
	models.SmallEntity.create(smallEntity)
		.success(function (newSmallEntity) {
			console.log(newSmallEntity);
			return newSmallEntity;
		})
		.fail(function (err) {
			console.error(err);
			return false;
		});
};

module.exports = service;