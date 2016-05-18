import React from 'react';
import {setTag, cancelTag, search} from '../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import List from './ListInfo';
import '../../css/search.css';

const Search = React.createClass({
    search() {
        let strings = this.props.tags.map(tag => {
            if (tag.select === true) {
                return `tag=${tag.tag}&`;
            }
        });
        browserHistory.push(`search?${strings.join('')}`)
        this.props.dispatch(search(`?${strings.join('')}`))
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
                  <input className="SI" type="text"/>
                </div>
                <div className="item1">
                    <div className="BorderBottom">
                        <input className="InputSearch" type="text" ref='text'/>
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
/**
 * Created by Artsiom_Rakitski on 4/19/2016.
 */
