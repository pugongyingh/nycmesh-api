const { Pool } = require('pg');

const con = new Pool({
  connectionString: 	`postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka`,
  ssl: true,
});



exports.handler = function(event, context, callback) {
  var client = new pg.Client(con);
  client.connect();
  var query = client.query("SELECT ip_address FROM log_visits");
  query.then(r => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(r.rows[0]),
    });
  });

}
