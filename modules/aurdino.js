/**
 * http://usejsdoc.org/
 */
"use strict";
	var request = require('request');
	var SF = require('./sf_API');


	exports.sf = SF;
	
exports.webhookPost = function(req,res)
{	
	SF.fetchToDo(req.body);	  
};