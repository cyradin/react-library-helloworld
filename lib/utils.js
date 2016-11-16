var url = require('url');

exports.fullUrl = function(req) {
    return url.format({
        protocol: req.protocol,
        hostname: req.hostname,
        port: req.socket.localPort,
        pathname: req.originalUrl
    });
}

exports.serverUrl = function(req) {
    return url.format({
        protocol: req.protocol,
        hostname: req.hostname,
        port: req.socket.localPort
    });
}