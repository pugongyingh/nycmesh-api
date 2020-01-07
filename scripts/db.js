
exports.handler = (event, context, callback) => {
 
    var pg = require('pg');
    //or native libpq bindings
   // var pg = require('pg').native

    //Can be found in the Details page
    var conString = "postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka"
    var client = new pg.Client(conString);




  client.connect();
  var query = client.query("SELECT ip_address FROM log_visits");
  query.then(r => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(r),
    });
  });
 // query.catch(r => console.log("HERE"));
  //var connection = {
    //host : 'testdb.cmzabivlkufu.us-east-2.rds.amazonaws.com',
    //user : 'derek',
    //password : 'Aa89snj12',
    //database : 'testdb',
  //};

  //try {
    //var client = new pg.Client(connection);
    //client.connect();
    //var query = await client.query("SELECT id FROM users;");

    //query.then(r => console.log(r));
    //query.catch(r => console.log(r));
    //client.end();
    //console.log("xs")
  //}
  //catch (err) {
    //console.log("x", err)
  //}
}



