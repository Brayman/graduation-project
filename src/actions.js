//const url = 'https://gentle-meadow-48046.herokuapp.com/';
const url = 'http://10.26.11.88/';
import fetch from 'isomorphic-fetch';
//--middleware

export function getPost() {
    return {
        type: 'REQUEST',
        actions: ['LOAD_POST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'],
        promise: loadPost()
    };
}
export function registration(impotantData) {
    return {
        type: 'REQUEST',
        actions: ['SEND_DATA', 'SEND_DATA_SUCCESS', 'SEND_DATA_FAILURE'],
        promise: registrUser(impotantData)
    };
}
export function login(data) {
    return {
        type: 'REQUEST',
        actions: ['SEND_LOGIN_DATA', 'SEND_LOGIN_DATA_SUCCESS', 'SEND_LOGIN_DATA_FAILURE'],
        promise: sendLoginData(data)
    };
}
export function getProfileData(user) {
    return {
        type: 'REQUEST',
        actions: ['LOAD_USER', 'LOAD_USER_SUCCESS', 'LOAD_USER_FAILURE'],
        promise: loadProfile(user)
    };
}
export function InitialUser(user) {
    return {
        type: 'REQUEST',
        actions: ['LOAD_USER', 'SEND_LOGIN_DATA_SUCCESS', 'LOAD_USER_FAILURE'],
        promise: initialUser(user)
    };
}
export function saveChanges(changes) {
    return {
        type: 'REQUEST',
        actions: ['SAVE_USER', 'SAVE_USER_SUCCESS', 'SAVE_USER_FAILURE'],
        promise: newChanges(changes)
    };
}
//--requests

function loadPost() {
    return fetch(url + 'users', {
        credentials: 'include'
    })
        .then(
            function (resp) {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw new Error(resp.status);
                }
            }
        );
}
function initialUser() {
    return fetch(`${url}login`, {
        credentials: 'include'
    })
        .then(
            function (resp) {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw new Error(resp.status);
                }
            }
        );
}
function registrUser(data) {
    fetch(url + 'signup', {
        method: 'post',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        function (resp) {
            if (resp.status === 200) {
                return resp.json();
            } else {
                throw new Error(resp.status);
            }
        }
    );
}
function newChanges(data) {
    fetch(url + 'settings', {
        method: 'post',
        mode: 'не тут',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(
            resp => {
                return resp.statusText;
            }
        );
}
function sendLoginData(data) {
    return fetch(url + 'users/login', {
        method: 'post',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(
            function (resp) {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw new Error(resp.status);
                }
            }
        );
}
function loadProfile(user_id) {
    return fetch(`${url}users/${user_id}`, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(
            function (resp) {
                if (resp.status === 200) {
                    return resp.json();
                } else {
                    throw new Error(resp.status);
                }
            }
        );
}

//--other

export function signOut() {
    return {
        type: 'SIGNOUT'
    };
}
export function newUser(impotantData) {
    return {
        type: 'REGISTRATION_NEW_USER',
        impotantData
    };
}
