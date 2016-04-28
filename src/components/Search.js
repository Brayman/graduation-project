import React from 'react';
import {search} from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import HomePage from './HomePage';
import '../../css/search.css';

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

            <div className="RowFlex JCC">
                <div className="item2 BorderRight">
                  <h2 className="BorderBottom h2">Критерии поиска </h2>
                  <h4 className="h4SC">Теги</h4>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="1" onClick={this.tags}/>
                      <label htmlFor="1"></label>
                    </div><span className="SD">Ремонт</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="2" onClick={this.tags}/>
                      <label htmlFor="2"></label>
                    </div><span className="SD">Питание</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="3" onClick={this.tags}/>
                      <label htmlFor="3"></label>
                    </div><span className="SD">Развлечения</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="4" onClick={this.tags}/>
                      <label htmlFor="4"></label>
                    </div><span className="SD">Дизайн</span>
                  </div>
                  <div className="SearchChet BorderBottom">
                    <div className="toggle">
                      <input type="checkbox" id="5" onClick={this.tags}/>
                      <label htmlFor="5"></label>
                    </div><span className="SD">Продукты</span>
                  </div>
                  <h4 className="h4S">Местоположение</h4>
                  <input className="SI" type="text"/>
                </div>
                <div className="item1">
                  <div className="BorderBottom">
                    <input className="InputSearch" type="text" ref='text'/>
                    <button className="BtnSearch" onClick={this.search}>
                      <i className="search icon"/>
                    </button>
                    <HomePage/>
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
/**
 * Created by Artsiom_Rakitski on 4/19/2016.
 */
