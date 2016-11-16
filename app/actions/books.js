import store from '@app/store';
import { BOOKS_LIST, BOOKS_EDIT, BOOKS_ADD, BOOKS_VIEW } from '@actiontypes';
import _ from 'underscore';

import api from '@lib/api';

export function list() {
    return function(dispatch) {
        api.books.list(function(data) {
            dispatch(listSync(data));
        });
    }
}

export function view(id) {
    return function(dispatch) {
        api.books.view(id, function(data) {
            dispatch(viewSync(data));
        });
    }
}

export function edit(book) {
    return function(dispatch) {
        api.books.edit(book, function(data) {
            dispatch(editSync(book));
        });
    }
}

export function add(book) {
    return function(dispatch) {
        api.books.add(book, function(data) {
            book.id = data.id;
            dispatch(addSync(book));
        });
    }
}

export function listSync(data) {
    return {
        type: BOOKS_LIST,
        data: data
    }
}

export function viewSync(data) {
    return {
        type: BOOKS_VIEW,
        data: data
    }
}

export function editSync(data) {
    return {
        type: BOOKS_EDIT,
        data: data
    }
}

export function addSync(data) {
    return {
        type: BOOKS_ADD,
        data: data
    }
}
