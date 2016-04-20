//const url = 'https://gentle-meadow-48046.herokuapp.com/';
const url = 'http://10.26.11.88/';
import fetch from 'isomorphic-fetch';

export function request(actions, promise) {
    return {
        type: 'REQUEST',
        actions,
        promise
    };
}
//--middleware
export function getPost() {
    return request(['LOAD_POST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'], loadPost());
}
export function registration(impotantData) {
    return request(['SEND_DATA', 'SEND_DATA_SUCCESS', 'SEND_DATA_FAILURE'], registrUser(impotantData));
}
export function login(data) {
    return request(['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'], loginReq(data));
}
export function getProfileData(user) {
    return request(['LOAD_USER', 'LOAD_USER_SUCCESS', 'LOAD_USER_FAILURE'], loadProfile(user));
}
export function InitialUser(user) {
    return request(['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'], initialUser(user));
}
export function saveChanges(changes) {
    return request(['SAVE_USER', 'SAVE_USER_SUCCESS', 'SAVE_USER_FAILURE'], newChanges(changes));
}
export function signout() {
    return request(['SIGNOUT', 'SIGNOUT_SUCCESS', 'SIGNOUT_FAILURE'], signoutReq());
}
export function getCompanys() {
    return request(['LOAD', 'LOAD_COMP_SUCCESS', 'LOAD_COMP_FAILURE'], loadCompanys());
}
//--requests

function req(url, headers) {
    return fetch(url, headers)
        .then(
            (resp) => {
                if (resp.status === 200) {
                    return resp.json();
                }
                throw new Error(resp.status);
            }
        );
}

function loadCompanys() {
    return req(`${url}companys`);
}

function signoutReq() {
    return fetch(`${url}logout`, {
        credentials: 'include'
    })
        .then(
            function (resp) {
                if (resp.status === 200) {
                    return resp.json();
                }
                throw new Error(resp.status);
            }
        );
}
function loadPost() {
    return fetch(`${url}users`, {
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
                }
                throw new Error(resp.status);
            }
        );
}
function registrUser(data) {
    fetch(`${url}signup`, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        function (resp) {
            if (resp.status === 200) {
                return resp.json();
            }
            throw new Error(resp.status);
        }
    );
}
function newChanges(data) {
    fetch(url + 'settings', {
        method: 'post',
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
function loginReq(data) {
    return fetch(`${url}login`, {
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
                }
                throw new Error(resp.status);
            }
        );
}

//--other

export function signOut() {
    return {
        type: ''
    };
}
export function newUser(impotantData) {
    return {
        type: 'REGISTRATION_NEW_USER',
        impotantData
    };
}
