var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

server.listen(3000, "192.168.88.128");

app.get("", function (request, respons) {
   respons.sendFile(__dirname + "/index.html");
});

users = [];
connections = [];

io.sockets.on("connect", function (socket) {
   console.log("Успешное подключение");
   connections.push(socket);

   socket.on("disconnect", function (data) {
      connections.splice(connections.indexOf(socket), 1);
      console.log("Успешное отключение");
   });

   socket.on("send mess", function (data) {
      io.sockets.emit("add mess", {
         name: data.name,
         mess: data.mess,
         className: data.className,
      });
   });
});
