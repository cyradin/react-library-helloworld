var merge = require('merge-deep');
var path = require('path');
var dateFormat = require('../lib/date_format');

var timestamp = function() {
    return dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss.l');
}

module.exports = merge({
    app: {
        port: 3000
    },
    log: {
        console: {
            level: 'debug',
            colorize: true,
            json: false,
            timestamp: timestamp
        },
        files: [
            {
                level: 'error',
                filename: path.join(__dirname, '../log/error.log'),
                name: 'errorFile',
                json: false,
                maxsize: 5242880,
                maxFiles: 5,
                timestamp: timestamp
            },
            {
                level: 'info',
                filename: path.join(__dirname, '../log/info.log'),
                name: 'infoFile',
                json: false,
                maxsize: 5242880,
                maxFiles: 5,
                timestamp: timestamp
            }
        ]
    }
}, require('./local'));