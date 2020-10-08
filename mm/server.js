var http = require("http");

var server = http.createServer();

server.on("request", (req, res) => {
   res.end("Hello");
});

server.listen(3000, "192.168.192.225", function () {
   console.log("Сервер работает");
});
