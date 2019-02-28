var express = require('express');
var socket = require('socket.io');


var app = express();
var PORT = 4000;

var server = app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function (socket) {
    console.log('socket');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
})