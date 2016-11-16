import store from '@app/store';
import { BOOKS_LIST, BOOKS_EDIT, BOOKS_ADD, BOOKS_VIEW } from '@actiontypes';
import _ from 'underscore';

var testData = [
    {id: 1, name: 'Seven', author: 'John Doe', readDate: '2016-01-15', file: '/img/1.jpg', cover: '/img/1_cover.jpg', allowDownload: true},
    {id: 2, name: 'Hello', author: 'John Doe', readDate: '2016-02-15', cover: '/img/2_cover.jpg', allowDownload: true},
    {id: 3, name: 'World', author: 'John Doe', readDate: '2016-03-15', file: '/img/3.jpg', allowDownload: false},
    {id: 4, name: 'Harry Potter', author: 'John Doe', readDate: '2016-04-15', file: '/img/4.jpg', cover: '/img/4_cover.jpg', allowDownload: false},
];

export function list() {
    return function(dispatch) {
        setTimeout(function() {
            dispatch(listSync());
        }, 1000);
    }
}

export function view(id) {
    return function(dispatch) {
        setTimeout(function() {
            dispatch(viewSync(id));
        }, 1000);
    }
}

export function edit(data) {
    return function(dispatch) {
        setTimeout(function() {
            dispatch(editSync(data));
        });
    }
}

export function add(data) {
    return function(dispatch) {
        setTimeout(function() {
            dispatch(addSync(data));
        });
    };
}

export function listSync() {
    return {
        type: BOOKS_LIST,
        data: testData
    }
}

export function viewSync(id) {
    return {
        type: BOOKS_VIEW,
        data: _.findWhere(testData, {id: id})
    }
}


export function editSync(data) {
    return {
        type: BOOKS_EDIT,
        data: data
    }
}

export function addSync(data) {
    var max = 0;
    for (var i = 0; i < testData.length; i++) {
        if (max < testData[i].id) {
            max = testData[i].id;
        }
    }
    data.id = ++max;
    return {
        type: BOOKS_ADD,
        data: data
    }
}
