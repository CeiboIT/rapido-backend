'use strict';

var express = require('express');
var router = express.Router();
var personService = require('../services/person');

router.get('/', function (req, res) {
	personService.findAll()
		.success(function (response) {
  			res.send(response);
		})
		.fail(function () {
			res.sendStatus(500);
		});
});

router.post('/', function (req, res) {
	var person = req.body;
	if (!personService.create(person)) {
		res.sendStatus(500);
	}
	res.sendStatus(200);	
});

module.exports = router;
