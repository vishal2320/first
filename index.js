const http =require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const server= http.createServer(app);
app.get('/', function (req, res) {
    // res.send('hello world');
   const data= fs.readFileSync('website.html');
   res.send(data.toString());
  }); 
server.listen(3000,console.log("server started and running on 3000"));