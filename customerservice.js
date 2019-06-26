var express = require('express');
var app = express();


//Reusable controllers
var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
          
 {CompanyName: "Fabrikam"},
 {TotalOffices: 24},
 {Products_Services1: "Web development"},
 {Products_Services2: "Software Devlopment and Services"}, 
 {Products_Services3: "Cloud Services"
 {Iaas: "Google Cloud Platform"},
 {host: "AWS"}
           
      ];
  res.send(customers);
};

// setting router to map requests  with controllers

app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})