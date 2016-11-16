import request from 'browser-request';
import cache from 'memory-cache';

const API_VERSION = 'v1';

var url = {
    books: '/api/' + API_VERSION + '/books'
}

var defaults = { method: 'GET', json: true, cache: true, cacheTime: 15000 };

function isSuccessful (response, data) {
    return response.status < 400 && data.success;
}

function sendRequest (options, callback) {
    options = Object.assign({}, defaults, options);

    var useCache = options.cache,
        cacheTime = options.cacheTime,
        data;

    if (useCache && (data = cache.get(options.url))) {
        callback(data);
        return;
    }

    delete(options.cache);
    delete(options.cacheTime);

    request(options, function(err, response, data) {
        if (! err && isSuccessful(response, data)) {
            if (useCache) {
                cache.put(options.url, data.data, cacheTime);
            }
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
        edit: function (data) {
            sendRequest({ url: url.books + '/' + data.id + '/edit', json: data, cache: false }, callback);
        },
        add: function () {
            sendRequest({ url: url.books + '/add', json: data, cache: false }, callback);
        }
    }
}

export default api;