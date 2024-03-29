'use strict';

var express = require('express');
// var router = express.Router();

module.exports = function (app) {

  	// Insert routes below
  	app.use('/api/smallentity', require('./smallEntity'));
  
	// All undefined asset or api routes should return a 404
	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   		.get(function (req, res) {
   			res.sendStatus(500);
   		});
	
	// All other routes should redirect to the index.html
	app.route('/*')
	    .get(function(req, res) {
	      	res.sendStatus(500);
	    });
};