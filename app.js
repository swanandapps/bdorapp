//IMPORT NODE MODULES 

var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose=require("mongoose")
var Schema = mongoose.Schema;

app.use(bodyParser.json());// to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// to support URL-encoded bodies

app.set("view engine","ejs")


mongoose.connect("mongodb://localhost/database")



var playerschema= new Schema({
    
    name: String,
    Rank: String
    
    
})

var players= mongoose.model("players", playerschema)


players.create(
    {
        
        name: "swanand",
    Rank: "One"
        
    }

    
),
    
 console.log(playerschema)
app.get("/",function(req,res){
    
    res.render("index.ejs");
    
    
});

app.post("/postform",function(req,res){
        
    
    console.log("new page opened");
    res.render("result.ejs");
    
    
        })

app.post("/newform",function(req,res){
    
    
    res.send("ssup");
    console.log(req.body)
   
}
    
)

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});

