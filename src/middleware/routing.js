import {browserHistory} from 'react-router';
const routing = store => next => action =>{
    if (action.type !== 'ROUTING') {
        return next(action);
    }
    const [startAction, successAction, failAction] = action.actions;
    store.dispatch({
        type: startAction
    });

    action.promise.then(
        (data)=>{
            browserHistory.goBack();
            store.dispatch({
                type: successAction,
                data
            });
        },
        (error)=> store.dispatch({
            type: failAction,
            error: error
        })
    );
};
export default routing;
