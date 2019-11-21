const mysql=require("mysql");

var express=require("express");

var cricket=express();

const connection=mysql.createConnection(
    {
       host:"192.168.43.151",
        user:"root",
        password:"manager",
        database:"play",
        port:3307

    }
);

var mydata=[];

connection.connect();

cricket.get("/get",function(request,response)
    {
        let query=`select * from cricket`;
        connection.query(query,function(err,result)
        {
            if(err==null)
            {
                mydata=result;
                response.contentType=("application/json");
                response.send(JSON.stringify(mydata));

            }
            else
            {
                response.send("errrrrrrrrrrrrrrrrrrrrrrr");
            }
           

        });



    });



module.exports=cricket;
