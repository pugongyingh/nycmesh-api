 var pg = require('pg');
var conString =  'postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka'
exports.handler = function(event, context, callback) {


//or native libpq bindings
//var pg = require('pg').native
  var response ={
        statusCode: 200,
        body: "999"
    };

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
   response ={
        statusCode: 200,
        body: "999888"
    };
  }
  client.query('SELECT  * FROM  behaviour_sample8', function(err, result) {
    if(err) {
        response = {
        statusCode: 200,
        body: "noo"
    };
    }
    else {
      response = {
        statusCode: 200,
        body: result.rows[0].toString()
    }
                    }

   //console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
 
 
 
 return response;
}
