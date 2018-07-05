var express = require('express');
//var https = require('https');
var https = require('http');
var fs = require('fs');
var socketio = require("socket.io");

var server = null;
var io = null;

try {
  var socketApp = express();
  socketApp.get('/', function (req, res) {
    if (io) {
      show_server_status();
    }
    res.send('Hello, World! socket server');
  });

/*
  server = https.createServer({
    key: fs.readFileSync('/usr/local/maildealer/ssl/server.key'),
    cert: fs.readFileSync('/usr/local/maildealer/ssl/server.crt')
  }, socketApp).listen(8080);
*/

  server = https.createServer(socketApp).listen(8080);

  console.log('socket http で起動');

} catch (e) {
  console.log('失敗');
  console.log(e);
}

io = socketio.listen(server, {cookie: false});

io.sockets.on("connection", function (socket) {
  console.log("***** connection *****");
  show_server_status();

  // 切断したときに送信
  socket.on("disconnect", function () {
    console.log("***** disconnect *****");
    show_server_status();
  });
});

function show_server_status() {
  console.log('server_status connection(s) ', Object.keys(io.sockets.connected).length);
  console.log('');
}


