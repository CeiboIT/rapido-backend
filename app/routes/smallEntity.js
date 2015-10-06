'use strict';

var express = require('express');
var router = express.Router();
var smallEntityService = require('../services/smallEntity');

router.get('/', function (req, res) {
	smallEntityService.findAll()
		.success(function (response) {
  			res.send(response);
		})
		.fail(function () {
			res.sendStatus(500);
		});
});

router.post('/', function (req, res) {
	var smallEntity = req.body;
	console.log('req.body', smallEntity);
	if (!smallEntityService.create(smallEntity)) {
		res.sendStatus(500);
	}
	res.sendStatus(200);	
});

module.exports = router;
