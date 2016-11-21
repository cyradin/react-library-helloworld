import request from 'browser-request';

import store from '@app/store';

const API_VERSION = 'v1';

var url = {
    auth: '/api/' + API_VERSION + '/auth',
    books: '/api/' + API_VERSION + '/books',
}

var defaults = { method: 'GET', json: true };

function isSuccessful (response, data) {
    return response.status < 400 && data.success;
}

function sendRequest (options, callback) {
    options = Object.assign({}, defaults, options);
    var state = store.getState();

console.dir(state);
    if (state.auth.authToken) {
        options.headers = {
            'Authorization': 'Bearer ' + state.auth.authToken
        }
    }

    request(options, function(err, response, data) {
        if (! err && isSuccessful(response, data)) {
            callback(data.data);
        }
    });
}

var api = {
    auth: {
        login: function (data, callback) {
            sendRequest({ url: url.auth + '/login', json: data, method: 'POST' }, callback);
        },
        logout: function (callback) {
            sendRequest({ url: url.auth + '/logout', json: true, method: 'POST' }, callback);
        },
        check: function (data, callback) {
            sendRequest({ url: url.auth + '/check', json: data, method: 'POST' }, callback);
        }
    },
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
}

export default api;