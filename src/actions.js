const url= 'https://peaceful-temple-19728.herokuapp.com';
//const url= 'http://10.26.11.88/';
//const url= ''

//--middleware

export function getPost(){
    return{
        type: 'LOAD',
        actions: ['LOAD_POST','LOAD_POST_SUCCESS','LOAD_POST_FAILURE'],
        promise: loadPost()
    }
}
export function registration(impotantData){
    return{
        type: "SEND",
        actions: ['SEND_DATA','SEND_DATA_SUCCESS','SEND_DATA_FAILURE'],
        promise: registrUser(impotantData),
    }
}
export function login(data){
    return{
        type: 'SEND',
        actions: ['SEND_LOGIN_DATA','SEND_LOGIN_DATA_SUCCESS','SEND_LOGIN_DATA_FAILURE'],
        promise: sendLoginData(data)
    }
}
export function getProfileData(){
    return{
        type: 'LOAD',
        actions: ['LOAD_USER','LOAD_USER_SUCCESS','LOAD_USER_FAILURE'],
        promise: loadProfile()
    }
}
//--requests

function loadPost(){
    return fetch(url+'/posts')
        .then(resp=> resp.json())
}
function registrUser(data){
    fetch(url+'/users', {
        method: 'post',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
}
function sendLoginData(data){
    fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
}
function loadProfile(){
    return fetch(url+'/users')
        .then(resp=> resp.json());
}

//--other

export function getUserData(username){
    console.log(username);
    return{
        type: "GET_PROFILE"
    }
}
export function newUser(impotantData){
    return{
        type: "REGISTRATION_NEW_USER",
        impotantData
    }
}


export function saveChanges(changes){
    return{
        type: 'NEW_PROFILE_DATA',
        data: changes
    }
}
/**
 * Created by Artsiom_Rakitski on 3/10/2016.
 */
