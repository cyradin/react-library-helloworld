import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from '@actiontypes';
import store from '@app/store';
import api from '@lib/api';

export function login(data) {
    return function(dispatch) {
        api.auth.login(data, function(response) {
            dispatch(loginSync(response));
        });
    }
}

export function logout() {
    return function(dispatch) {
        api.auth.logout(function() {
            dispatch(logoutSync());
        });
    }
}

export function check(token) {
    return function(dispatch) {
        api.auth.check({ token: token }, function(response) {
            dispatch(checkSync(response));
        });
    }
}

export function loginSync(data) {
    localStorage.setItem('refreshtoken', data.refreshtoken);
    return {
        type: AUTH_LOGIN,
        data: data
    }
}

export function logoutSync() {
    localStorage.removeItem('refreshtoken');
    return {
        type: AUTH_LOGOUT
    }
}

export function checkSync(data) {
    if (! data.authorized) {
        // localStorage.removeItem('refreshtoken'); //debug
    }
    return {
        type: AUTH_CHECK,
        data: data
    }
}