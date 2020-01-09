const { Client } = require('pg')

exports.handler = async (event) => {

       let params = event.queryStringParameters;
      let uuu =  params.xym;
      var n = "no";
     if (uuu>0) {
 n = "noooo";

    }
    
    
    const connectionString = 'postgres://fpzwzphf:a2Eq8faak-xgWRBH4GD8anvuP8fXK1Zj@arjuna.db.elephantsql.com:5432/fpzwzphf'

    const client = new Client({
        connectionString: connectionString
    })

    
  
         var num=uuu;
         if(num.match(/^\d+$/) && num.length == 6){
             await client.connect();
             const { rows } = await client.query("DELETE FROM xinyun WHERE xym = ${num} RETURNING xym");
             await client.end();
             if (rows.length) {
               if (rows[0].xym == num) {
                    n = "okkk";
                    
                }
             }
          } 
  
    
    
    
    
   // await client.connect()

   //  const { rows } = await client.query("DELETE FROM xinyun WHERE xym = 12345678 RETURNING xym")

    // { pk: '123' }
    //console.log(res.rows[2])

   // await client.end();
   
     
 
  //   if (rows.length) {
   //            if (rows[0].xym == 12345678) {
  //                  n = "ok"
  //              }

  //  }


    const response = {
        statusCode: 200,
        body: n
    };

    return response;

}
