var winston = require('winston');
var config = require('./config');

var transports = [];

if (config.log.console) {
    transports.push(new winston.transports.Console(config.log.console))
}

if (config.log.files && Array.isArray(config.log.files)) {
    var files = config.log.files;
    for (var i = 0; i < files.length; i++) {
        transports.push(new winston.transports.File(files[i]));
    }
}

var logger = new (winston.Logger)({
    transports: transports
});

logger.emitErrs = false;

module.exports = logger;