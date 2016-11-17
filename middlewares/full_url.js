var url = require('url');

module.exports = function (req, res, next) {
    req.fullUrl = url.format({
        protocol: req.protocol,
        hostname: req.hostname,
        port: req.socket.localPort,
        pathname: req.originalUrl
    });

    req.serverUrl = url.format({
        protocol: req.protocol,
        hostname: req.hostname,
        port: req.socket.localPort
    });

    next();
}