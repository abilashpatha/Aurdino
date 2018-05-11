/**
 * http://usejsdoc.org/
 */
"use strict";
	var request = require('request');
	var SF = require('./sf_API');


	exports.sf = SF;
	
exports.webhookPost = function(req,res)
{	
	console.log('reached aurdino.js');
	SF.fetchToDo(req.body);	  
	console.log('completed sf');
};