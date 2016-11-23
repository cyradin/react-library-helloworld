import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from '@actiontypes';

var initialState = {
    authorized: false,
    checked: false,
    authToken: null,
    refreshToken: localStorage.getItem('refreshtoken')
};

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            var newState = Object.assign({}, state, {
                authorized: true,
                checked: true,
                authToken: action.data.authToken,
                refreshToken: action.data.refreshToken,
            });
            return newState;
        case AUTH_LOGOUT:
            var newState = Object.assign({}, state, { authorized: false, authToken: null, refreshtoken: null })
            return newState;
        case AUTH_CHECK:
            var newState = Object.assign({}, state, { authorized: action.data.authorized, authToken: action.data.authToken || null, checked: true })
            return newState;
    }

    return state;
}