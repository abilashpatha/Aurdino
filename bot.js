/**
 * 
 * Porject is referenced based on Facebook, Inc graph-api-webhooks-samples
 * "url": "https://github.com/fbsamples/graph-api-webhooks-samples"
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 * newchange
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var bodyParser = require('body-parser');
var express = require('express');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var nForceAuth = require('nforce');
var request = require('request');
//var sf = require('./modules/SF_API');
//var fb = require('./modules/FB_webhook');
var ard = require('./modules/aurdino');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));

app.use(bodyParser.json());
//app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  console.log(req);
  res.send('It works!');
});

app.post('/', function(req, res) {
  console.log(req.body);
  ard.webhookPost(req,res);
  res.send('post works!');
});
/*app.get('/ID', function(req, res)
		{
		
		var record = sf.IntialIntract();
	
		if(sf.err){
			res.send(res.get('Id'));
		}
		else{
			  res.send('It works, Contact Name is: ' +record.Name);
			  }
});*/

//app.get('/salesforce/ID', sf.IntialIntract);

//app.get('/facebook', fb.webhookGet);
//app.post('/facebook', fb.webhookPost);

/*app.post('/facebook', function(req, res) {
  console.log('Facebook request body:');
  console.log(req.body);
  // Process the Facebook updates here
  res.sendStatus(200);
});*/


app.listen();