'use strict';

var express = require('express');
var router = express.Router();
var specialtyService = require('../services/specialty');

router.get('/', function (req, res) {
	specialtyService.findAll()
		.success(function (response) {
  			res.send(response);
		})
		.fail(function () {
			res.sendStatus(500);
		});
});
