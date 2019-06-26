var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
          
 {CompanyName: "Fabrikam"},
 {TotalOffices: 24},
 {products:[{Products_Service1: "Web development"},
 {Products_Service2: "Software Devlopment and Services"}, 
 {Products_Service3: "Cloud Services"}]},
 {Iaas: "Google Cloud Platform"},
 {host: "AWS"}
           
           
      ];
  res.send(customers);
};


app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})