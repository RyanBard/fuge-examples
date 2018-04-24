var port = 8081;
var waitTime = 0;
var http = require('http');

function startup() {
    console.log('Listening on port %s', port);
}

function shutdown() {
    console.log('Shutting down in %s milliseconds', waitTime);
    setTimeout(function () {
        server.close(function () {
            console.log('Shutting down now!');
            process.exit(0);
        });
    }, waitTime);
}

var server = http.createServer(function (req, res) {
    res.end('hello world');
});

server.listen(port, function (err) {
    console.log('Listening on port ', port);
});

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
