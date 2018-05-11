/**
 * http://usejsdoc.org/
 */
"use strict";
	var request = require('request');
	var SF = require('./SF_API');
	var ST = require('./SetTemplate');


	exports.sf = SF;
	
exports.webhookPost = function(req,res)
{	
	SF.fetchToDo(req.body);	  
};