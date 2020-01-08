const { Client } = require('pg')

exports.handler = async (event) => {

    const connectionString = '	postgres://fpzwzphf:a2Eq8faak-xgWRBH4GD8anvuP8fXK1Zj@arjuna.db.elephantsql.com:5432/fpzwzphf'

    const client = new Client({
        connectionString: connectionString
    })

    await client.connect()

     const { rows } = await client.query("DELETE FROM xinyun WHERE xym = 12345678 RETURNING xym")

    // { pk: '123' }
    //console.log(res.rows[2])

    await client.end();
    var n = "no";
     
 
     if (rows.length) {
               if (rows[0].xym == 12345678) {
                    n = "ok"
                }

    }


    const response = {
        statusCode: 200,
        body: n
    };

    return response;

}
