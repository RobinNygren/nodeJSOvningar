const http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("<h1>Hello World!</h1>"); //write a response to the client
    res.end(); //end the response
  })
  .listen(3000); //the server object listens on port 3000
