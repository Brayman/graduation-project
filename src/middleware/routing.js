import {browserHistory} from 'react-router';
const routing = store => next => action =>{
    if (action.type !== 'SEARCH') {
        return next(action);
    }
    const [startAction, successAction, failAction] = action.actions;
    store.dispatch({
        type: startAction,
        tag: action.tag
    });

    action.promise((data) =>
        browserHistory.push(data)
    );
};
export default routing;
