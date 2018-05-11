/**
 * http://usejsdoc.org/
 */
"use strict";
var bodyParser = require('body-parser');
var nForceAuth = require('nforce'),
Promise = require('promise'),
//SFclientId ='3MVG9d8..z.hDcPIiJoaFcNQCdDyqq1f3adQwoqOsXEy74V5w4npSVjEP5NmM79Ik2Kpap14NB2zvZzp2E4eZ',
//SFSecret ='3105483709603369657',
//SFusername ='feuji@connect123.com.dev',
//SFpassword ='login@123'
SFclientId = process.env.SF_CONSUMER_KEY,
SFSecret = process.env.SF_CONSUMER_SECRET,
SFusername = process.env.SF_USER,
SFpassword = process.env.SF_PASSWORD,
SFSecurityToken = process.env.SF_SECURITY_TOKEN

;

var AccessToken = '';
var connection = nForceAuth.createConnection({
	clientId: SFclientId,
	clientSecret: SFSecret,
	redirectUri: 'http://vibrant-educational-society.business.site/',
	mode: 'single',
	autoRefresh:true});

connection.authenticate({ username: SFusername, password: SFpassword, securityToken: SFSecurityToken }, function(err,resp){
	 if (err) {
         console.log("Authentication error df- " + err);
     } else {
         console.log('Authentication successful. Cached Token: ' + connection.oauth.access_token);
         AccessToken = resp.access_token;
         console.log('Authentication Access: ' + AccessToken);
     }
});

var fetchToDo = function(psid){    
	console.log("inside fetchToDo Method"+JSON.stringify(psid));
	return new Promise(function(resolve, reject){
		//connection.query({query: "SELECT Name, Amount FROM Opportunity where Id ='0067F000004YR3c'" }, function(err, res)
		connection.apexRest({uri:"/AurdinoTemperature",method:"POST",body:JSON.stringify(psid)}, function(err, res)	
				{
		    if(err)
		    { console.error(err);
		    	reject("AnError Occured");}
		    	    else { 
		    	    	var evenResult = res;
		    	    	console.log("apex rest get RESULT for infomation is: ");
		    	    	console.log(JSON.stringify(evenResult));
		    	    	resolve(res);
		   }
		   });
		});
	
};
exports.fetchToDo = fetchToDo;
exports.connection = connection;
exports.AccessToken = AccessToken;