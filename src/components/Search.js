import React from 'react';
import {setTag, cancelTag, search} from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import List from './ListInfo';
import '../../css/search.css';
import {debounce} from 'throttle-debounce';

const Search = React.createClass({
    search() {
      var searchValue = this.refs.search.value,
      locationValue = this.refs.location.value;
      let strings = this.props.tags.filter(t => t.select === true).map(t=>t.tag).join("+");
            strings = strings && `&tag=${strings}`;
            searchValue = searchValue && `q=${searchValue}`;
            locationValue = locationValue && `&location=${locationValue}`;
            browserHistory.push(`search?${searchValue}${strings}${locationValue}`)
            this.props.dispatch(search(`?${searchValue}${strings}${locationValue}`))
    },
    tags(e) {
        if (e.target.checked) {
            return this.props.dispatch(setTag(this.props.tags[e.target.id - 1]));
        }
        return this.props.dispatch(cancelTag(this.props.tags[e.target.id - 1]));
    },
    render() {
        var post = this.props.posts;
        return (

            <div className="content RowFlex JCC">
                <div className="item2 BorderRight">
                  <h2 className="BorderBottom h2">Критерии поиска </h2>
                  <h4 className="h4SC">Теги</h4>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="1" onClick={this.tags}/>
                      <label htmlFor="1"/>
                    </div><span className="SD">Ремонт</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="2" onClick={this.tags}/>
                      <label htmlFor="2"/>
                    </div><span className="SD">Питание</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="3" onClick={this.tags}/>
                      <label htmlFor="3"/>
                    </div><span className="SD">Развлечения</span>
                  </div>
                  <div className="SearchChet">
                    <div className="toggle">
                      <input type="checkbox" id="4" onClick={this.tags}/>
                      <label htmlFor="4"/>
                    </div><span className="SD">Дизайн</span>
                  </div>
                  <div className="SearchChet BorderBottom">
                    <div className="toggle">
                      <input type="checkbox" id="5" onClick={this.tags}/>
                      <label htmlFor="5"/>
                    </div><span className="SD">Продукты</span>
                  </div>
                  <h4 className="h4S">Местоположение</h4>
                  <input className="SI" type="text" ref="location"/>
                </div>
                <div className="item1">
                    <div className="BorderBottom">
                        <input className="InputSearch" type="text" ref="search" onKeyUp={debounce(550, this.search)}/>
                        <button className="BtnSearch" onClick={this.search}>
                            <i className="search icon"/>
                        </button>
                    </div>
                    <div className="SearchBody">
                        {post.map(function (post) {
                            return (
                                <List key={post._id} data={post}/>
                            );
                        })}
                    </div>
                </div>
            </div>

        );
    }
});
export default connect(
    (state)=> {
        return {
            userData: state.userData,
            tags: state.tags,
            posts: state.posts
        };
    }
)(Search);
