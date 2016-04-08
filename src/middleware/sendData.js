const sendData = store => next => action =>{
    if (action.type !== 'REQUEST') {
        return next(action);
    }
    const [startAction, successAction, failAction] = action.actions;
    store.dispatch({
        type: startAction
    });

    action.promise.then(
        (data)=>{
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
export default sendData;
/**
 * Created by Artsiom_Rakitski on 3/25/2016.
 */
