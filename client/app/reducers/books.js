import { BOOKS_LIST, BOOKS_VIEW, BOOKS_EDIT, BOOKS_ADD } from '@actiontypes';
import _ from 'underscore';

var initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case BOOKS_LIST:
            var newState = _.uniq(_.union(state, action.data), false, _.property('id'));
            return newState;
        case BOOKS_VIEW:
            var newState = _.uniq(_.union(state, [action.data]), false, _.property('id'));
            return newState;
        case BOOKS_EDIT:
            var newState = state.slice(0);
            for (var i = 0; i < newState.length; i++) {
                if (action.data.id == newState[i].id) {
                    newState[i] = Object.assign(newState[i], action.data);
                }
            }
            return newState;
        case BOOKS_ADD:
            var newState = state.slice(0);
            newState.push(action.data);
            return newState;
    }

    return state;
}