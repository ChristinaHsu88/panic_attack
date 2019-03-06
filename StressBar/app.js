var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var logfmt = require("logfmt");

/*send the file */
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.configure(function() {
  // Turn down the logging activity
  app.use(express.logger('dev'));
  app.use(express.static('public')); 
});

server.listen(5000);

io.set('log level',1);

// Listen for Socket.IO Connections. Once connected, start the game logic.
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
    // console.log('client connected');
});