import request from 'browser-request';

const API_VERSION = 'v1';

var url = {
    books: '/api/' + API_VERSION + '/books',
    user: '/api/' + API_VERSION + '/user'
}

var defaults = { method: 'GET', json: true };

function isSuccessful (response, data) {
    return response.status < 400 && data.success;
}

function sendRequest (options, callback) {
    options = Object.assign({}, defaults, options);

    request(options, function(err, response, data) {
        if (! err && isSuccessful(response, data)) {
            callback(data.data);
        }
    });
}

var api = {
    books: {
        list: function (callback) {
            sendRequest({ url: url.books }, callback);
        },
        view: function (id, callback) {
            sendRequest({ url: url.books + '/' + id }, callback);
        },
        edit: function (data, callback) {
            sendRequest({ url: url.books + '/' + data.id + '/edit', json: data, method: 'POST' }, callback);
        },
        add: function (callback) {
            sendRequest({ url: url.books + '/add', json: data, method: 'POST' }, callback);
        }
    },
    user: {
        login: function (data, callback) {
            sendRequest({ url: url.user + '/login', json: data, method: 'POST' }, callback);
        },
        logout: function (callback) {
            sendRequest({ url: url.user + '/logout', json: true, method: 'POST' }, callback);
        },
    }
}

export default api;