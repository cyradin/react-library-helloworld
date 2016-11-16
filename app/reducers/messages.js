import { MESSAGE_SHOW, MESSAGE_DISMISS } from '@actiontypes';
import _ from 'underscore';

var initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case MESSAGE_SHOW:
            var newState = JSON.parse(JSON.stringify(state));
            newState.push(action.data);
            return newState;
        case MESSAGE_DISMISS:
            var newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.data, 1);
            console.dir(newState);
            return newState;
    }

    return state;
}