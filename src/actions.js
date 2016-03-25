export function newUser(impotantData){
    return{
        type: "REGISTRATION_NEW_USER",
        impotantData
    }
}
export function registr(impotantData){
    return{
        type: "REGISTRATION",
        actions: ['SEND','SEND_SUCCESS','SEND_FAILURE'],
        promise: registrUser(impotantData)
    }
}
export function registrUser(data){
    fetch('http://10.26.11.88/users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
}
export function logIn(){
    return{
        type: "LOG_IN"
    }
}
export function getUserData(username){
    console.log(username);
    return{
        type: "GET_PROFILE"
    }
}
export function loadPostData(){
    return{
        type: 'LOAD_POSTS',
        actions: ['LOAD_POST','LOAD_POST_SUCCESS','LOAD_POST_FAILURE'],
        promise: getData()
    }
}
function getData(){
     return fetch('https://peaceful-temple-19728.herokuapp.com/posts')
         .then(resp=> resp.json())
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
