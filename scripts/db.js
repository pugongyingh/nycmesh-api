

exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: createReturn()
    });
}

function createReturn() {
    //return '{"msg": "Hello visitor from the outer space!"}'

    var pg = require('pg');
    //or native libpq bindings
   // var pg = require('pg').native

    //Can be found in the Details page
    var conString = "postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka"
    var client = new pg.Client(conString);
    client.connect(function (err) {
        if (err) {
            return `{"msg": "Current Time: 888"}`;
        }
        client.query('SELECT ip_address FROM log_visits', function (err, result) {
            if (err) {
                return `{"msg": "Current Time: 999"}`;
            }
            var output = JSON.stringify(result);
            // >> output: 2018-08-23T14:02:57.117Z
            client.end();
            return  `{"msg": "Current Time: 444"}`;;
        });
    });
}
