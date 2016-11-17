import { MESSAGE_SHOW, MESSAGE_DISMISS } from '@actiontypes';
import _ from 'underscore';

export function show() {
    return function(dispatch) {
        dispatch(showSync(data));
    }
}

export function dismiss(id) {
    return function(dispatch) {
        dispatch(dismissSync(id));
    }
}

export function showSync(data) {
    if (! data.text) {
        return;
    }

    if (! data.type) {
        data.type = 'error';
    }

    return {
        type: MESSAGE_SHOW,
        data: data
    }
}

export function dismissSync(id) {
    return {
        type: MESSAGE_DISMISS,
        data: id
    }
}