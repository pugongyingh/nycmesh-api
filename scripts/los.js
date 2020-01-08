const { Client } = require('pg')

exports.handler = async (event) => {

    const connectionString = 'postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka'

    const client = new Client({
        connectionString: connectionString
    })

    await client.connect()

   // const res = await client.query("DELETE FROM behaviour_sample8 WHERE notes = 'Tom66'")
 var jg ="55";
    
           var qString = "DELETE FROM behaviour_sample8 WHERE notes = 'Tomm'";
        client.query(qString, function(err, result) {
          if(err) {
            client.end();
              jg="err77";
            
          }
     
          jg="Delete Successfully";
         
          client.end();
        }); 
    
    
    // { pk: '123' }
   // console.log(res.rows[2])

   // await client.end()

    
    const response = {
        statusCode: 200,
        body: jg
    };

    return response;

}
