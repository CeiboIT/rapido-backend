'use strict';

var models = require('../models');
var service = {};

service.findAll = function () {
	return models.Person.findAll()
		.success(function (response) {
			return response;
		})
		.fail(function (err) {
			console.error(err);
			return false;
		});
};

service.create = function (person) {
	// create and insert the new Person
	return models.Person.create(person)
		.success(function (saved) {
			return saved;
		})
		.fail(function (err) {
			console.error('Error saving Person', err);
			return false;
		});
};

module.exports = service;