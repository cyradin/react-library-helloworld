import { USER_LOGIN, USER_LOGOUT } from '@actiontypes';

import api from '@lib/api';

export function login(data) {
    return function(dispatch) {
        api.user.login(data, function(response) {
            dispatch(loginSync(response));
        });
    }
}

export function logout() {
    return function(dispatch) {
        api.user.logout(function() {
            dispatch(logoutSync());
        });
    }
}

export function loginSync(data) {
    return {
        type: USER_LOGIN,
        data: data
    }
}

export function logoutSync() {
    return {
        type: USER_LOGOUT
    }
}