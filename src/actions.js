const url = 'https://gentle-meadow-48046.herokuapp.com/';
//const url = 'http://10.26.11.88/';
import {browserHistory} from 'react-router';
import fetch from 'isomorphic-fetch';

export function requestAction(actions, promise) {
    return {
        type: 'REQUEST',
        actions,
        promise
    };
//--middleware
}
export function getPost() {
    return requestAction(['LOAD_POST', 'LOAD_POST_SUCCESS', 'LOAD_POST_FAILURE'], loadPost());
}
export function registration(impotantData) {
    return requestAction(['SEND_DATA', 'SEND_DATA_SUCCESS', 'SEND_DATA_FAILURE'], registrUser(impotantData));
}
export function login(data) {
    return requestAction(['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'], loginReq(data));
}
export function getProfileData(user) {
    return requestAction(['OPEN_PROFILE', 'LOAD_PROFILE_SUCCESS', 'LOAD_PROFILE_FAILURE'], loadProfile(user));
}
export function InitialUser(user) {
    return requestAction(['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'], initialUser(user));
}
export function saveChanges(changes) {
    return requestAction(['SAVE_SETTINGS', 'SAVE_SETTINGS_SUCCESS', 'SAVE_SETTINGS_FAILURE'], newChanges(changes));
}
export function signout() {
    return requestAction(['SIGNOUT', 'SIGNOUT_SUCCESS', 'SIGNOUT_FAILURE'], signoutReq());
}
export function getCompanys() {
    return requestAction(['LOAD', 'LOAD_COMP_SUCCESS', 'LOAD_COMP_FAILURE'], loadCompanys());
}
//--requests
function headers(data) {
    return {
        method: 'post',
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}
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
    return req(`${url}companies`);
}
function signoutReq() {
    return req(`${url}logout`, {credentials: 'include'});
}
function loadPost() {
    return req(`${url}users`);
}
function initialUser() {
    return req(`${url}login`, {credentials: 'include'});
}
function registrUser(data) {
    req(`${url}signup`, headers(data));
}
function newChanges(data) {
    req(`${url}users/${data._id}`, headers(data));
}
function loginReq(data) {
    return req(`${url}login`, headers(data));
}
function loadProfile(user) {
    return req(`${url}users/${user}`);
}
function searchReq(params) {
    return req(`${url}search${params}`);
}
export function openProfile(user) {
    browserHistory.push(`/${user}`);
    return {
        type: 'OPEN_PROFILE'
    };
}
export function setTag(tag) {
    //return searchAction (['SET_TAG', 'SEARCH'], selectMap())
    return {
        type: 'SET_TAG',
        tag
    };
}
export function cancelTag(tag) {
    //return searchAction (['SET_TAG', 'SEARCH'], selectMap())
    return {
        type: 'CANCEL_TAG',
        tag
    };
}

function searchAction(actions, promise) {
    return {
        type: 'SEARCH',
        actions,
        promise
    };
}
export function search(url) {
    return requestAction(['SEARCHING', 'RESULT', 'ERROR'], serchRequest(url));
}
function serchRequest(query) {
    return req(`${url}search${query}`);
}
