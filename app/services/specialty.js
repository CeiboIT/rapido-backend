'use strict';

var models = require('../models');
var service = {};

service.findAll = function () {
	return models.Specialty.findAll()
		.success(function (response) {
			return response;
		})
		.fail(function (err) {
			console.error(err);
			return false;
		});
};

module.exports = service;