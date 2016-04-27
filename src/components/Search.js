import React from 'react';
import {search} from '../actions';
import {connect} from 'react-redux';

const Search = React.createClass({
    render() {
        return (
            <div className="RowFlex JCC">
                <div className="item3p BorderRight">
                  <h2 className="BorderBottom h2">Критерии поиска</h2>
                  <h4 className="h4SC">Теги</h4>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="1"/>
                      <label htmlFor="1"></label>
                    </div><span className="SD">Ремонт</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="2"/>
                      <label htmlFor="2"></label>
                    </div><span className="SD">Питание</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="3"/>
                      <label htmlFor="3"></label>
                    </div><span className="SD">Развлечения</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="4"/>
                      <label htmlFor="4"></label>
                    </div><span className="SD">Дизайн</span>
                  </div>
                  <div className="SearchChet BorderBottom">
                    <div className="toggle">
                      <input type="checkbox" id="5"/>
                      <label htmlFor="5"></label>
                    </div><span className="SD">Продукты</span>
                  </div>
                  <h4 className="h4S">Местоположение</h4>
                  <input className="SI" type="text"/>
                </div>
                <div className="item2p">
                  <div className="BorderBottom">
                    <input className="InputSearch" type="text" ref='text'/>
                    <button className="BtnSearch" onClick={() => this.props.dispatch(search(this.refs.text.value))}>
                      <i className="search icon"/>
                    </button>
                  </div>
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
