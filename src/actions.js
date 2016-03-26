const url= 'https://peaceful-temple-19728.herokuapp.com';
//const url= 'http://10.26.11.88/';
//const url= ''

//--middlewares
export function loadPost(){
    return{
        type: 'LOAD_POSTS',
        actions: ['LOAD_POST','LOAD_POST_SUCCESS','LOAD_POST_FAILURE'],
        promise: getPost()
    }
}
export function registration(impotantData){
    return{
        type: "REGISTRATION",
        actions: ['SEND','SEND_SUCCESS','SEND_FAILURE'],
        promise: registrUser(impotantData),
        data: impotantData
    }
}
export function loadUserData(){
    return{
        type: 'LOAD_POSTS',
        actions: ['LOAD_POST','LOG_IN','LOAD_POST_FAILURE'],
        promise: logIn()
    }
}
//--reqvests
function getPost(){
    return fetch(+'/posts')
        .then(resp=> resp.json())
}
function registrUser(data){
    fetch(url+'/users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
}
function getProfile(){
    return fetch(url+'/users')
        .then(resp=> resp.json());
    //return{
    //    type: "LOG_IN"
    //}
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
