const { Client } = require('pg')

exports.handler = async (event) => {

    const connectionString = 'postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka'

    const client = new Client({
        connectionString: connectionString
    })

    await client.connect()

    const res = await client.query('INSERT INTO behaviour_sample8 VALUES ("Tommmm88")')

    // { pk: '123' }
   // console.log(res.rows[2])

    await client.end()

    
    const response = {
        statusCode: 200,
        body: res.toString()
    };

    return response;

}
