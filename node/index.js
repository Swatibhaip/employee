var express=require("express");

var cric=require("./cric");

var app=express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/cricket",cric);



app.listen(4000,function()
{
 console.log("server starttttttttttt" + 4000);
});
