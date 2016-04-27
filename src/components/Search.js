import React from 'react';
import {search} from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

const Search = React.createClass({
    getInitialState() {
        return {url: `/search?`}
    },
    search(e) {
        this.setState({url: `text=${this.refs.text.value}&`})
        browserHistory.push(`/search?text=${this.refs.text.value}&`);
        console.log(e.target);
        this.props.dispatch(search(this.refs.text.value));
    },
    tags(e) {
        this.setState({url: `${this.state.url}tag=${e.target.value}&`})
        this.props.dispatch(search(this.state.url));
    },
    render() {
        return (
            <div className="RowFlex">
                <div>
                  <input type="text" ref='text'/>
                  <button onClick={this.search}>
                    <i className="search icon"/>
                  </button>
                </div>
                <div>
                  <button onClick={this.tags}>repair</button>
                  <button>авто</button>
                  <button onClick={()=> browserHistory.goBack()}>прицепы</button>
                </div>
            </div>
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
