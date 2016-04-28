import React from 'react';
import {search} from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

const Search = React.createClass({
    search() {
        this.props.dispatch(search(this.props.location.search));
    },
    tags(e) {
        if (!e.target.checked) {
            return browserHistory.push('/search');
        }
        switch (e.target.id) {
            case '1':
                return browserHistory.push(`/search?rm=${e.target.id}`);
            case '2':
                return browserHistory.push(`/search?eat=${e.target.id}`);
            case '3':
                return browserHistory.push(`/search?fun=${e.target.id}`);
            case '4':
                return browserHistory.push(`/search?des=${e.target.id}`);
            case '5':
                return browserHistory.push(`/search?pr=${e.target.id}`);
        }
    },
    render() {
        return (
            <button> ok</button>
        );
    }
});
export default connect(
    (state)=> {
        return {
            userData: state.userData
        };
    }
)(Search);
/**
 * Created by Artsiom_Rakitski on 4/19/2016.
 */
