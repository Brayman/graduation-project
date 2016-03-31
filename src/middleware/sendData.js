const  sendData = store => next => action =>{
//    if (action.type !== 'SEND'){
//        return next(action)
//    }
//    const [startAction, successAction, failAction]= action.actions;
//    store.dispatch({
//        type: startAction
//    });
//    store.dispatch({
//        type: successAction,
//        data: action.data
//    })
//};
if (action.type !== 'SEND'){
    return next(action)
}
const [startAction, successAction, failAction]= action.actions;
store.dispatch({
    type: startAction
});
console.log(action.promise);
action.promise.then((data)=>store.dispatch({
    type: successAction,
    data
}),(error)=> store.dispatch({
    type: failAction,
    error
}))
};
export default sendData;
/**
 * Created by Artsiom_Rakitski on 3/25/2016.
 */
