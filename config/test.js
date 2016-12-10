var config = process.env.NODE_ENV === 'test'
    ? {
        app: {
            port: 8000
        },
        log: {
        console: {
            level: 'error'
        },
        files: []
    } } 
    : {}

module.exports = config;