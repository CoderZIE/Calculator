
/* eslint-disable no-eval */


const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile( __dirname + "/index.html");
});

app.post("/", function(req,res){

  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);

  var result = num1 + num2;
  res.send("Result: "+result);
});


app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){

 var w = parseFloat(req.body.w);
 var h = parseFloat(req.body.h);

var ans = w/(h*h);

 res.send("result "+ans);
});

app.listen(3000, function(){
  console.log("Your server is ready on port 3000");
});
