import { BOOKS_LIST, BOOKS_VIEW, BOOKS_EDIT, BOOKS_ADD } from '@actiontypes';
import _ from 'underscore';

var initialState = {
    data: [],
    loaded: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case BOOKS_LIST:
            var newState = {
                loaded: true,
                data: _.uniq(_.union(state, action.data), false, _.property('id'))
            };
            return newState;
    }

    return state;
}