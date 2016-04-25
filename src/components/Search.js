import React from 'react';
import {search} from '../actions';
import {connect} from 'react-redux';

const Search = React.createClass({
    render() {
        return (
            <div className="RowFlex">
                <div>
                  <input type="text" ref='text'/>
                  <button onClick={() => this.props.dispatch(search(this.refs.text.value))}>
                    <i className="search icon"/>
                  </button>
                </div>
                <div>
                  <button onClick={() => this.props.dispatch(search('repair'))}>ремонт</button>
                  <button>авто</button>
                  <button>прицепы</button>
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
export default Search;
/**
 * Created by Artsiom_Rakitski on 4/19/2016.
 */
