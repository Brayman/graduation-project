import React from 'react';
import ListInfo from './ListInfo';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {connect} from 'react-redux';
import '../../css/home.css';
var HomePage = React.createClass({
    componentWillMount() {
        this.props.actions.getPost();
        this.props.actions.getComp();
    },
    render: function () {
        var actions = this.props.actions;
        var post = this.props.posts;
        return (
          <div className="content home">
          <div className="RowFlex LeftBtnPanel wrapgo">
              <div className="LeftBtnPanel">
                <div className="borderwethe"><iframe className="wethe" src="http://www.eurometeo.ru/belarus/minskaya-oblast/minsk/export/html/1/data/?d=5&w=150&ft=11&fn=a&bc=cccccc&hb=cccccc&hf=000000&hs=1&fb=cccccc&ff=666666&fs=3&cb=ffffff&c1=999999&c2=000000&cp=eeeeee&cs=1" frameborder="0" scrolling="no"></iframe></div>
                  <div className="borderwethe">
                    <div className="top5">
                      <div className="nametop5">Топ компаний:</div>
                        {this.props.company.map(function (company) {
                            return (
                                <div className="rowtop5 LeftBtnPanel">
                                    <div className="toptext">{company.name || company.login}</div><div className="toptext">rating</div><div className="toptext">{company.rating}</div>
                                </div>
                            );
                        })}
                    </div>
                  </div>
                </div>
                <iframe className="news" src="http://news.bigmir.net/get_informers_new/0/ru/6/0/green/v/no" allowtransparency="true" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
              </div>
            <div className="NewsColumn">
                <div className="Post">
                    <div>
                        {post.map(function (post) {
                            return (
                                <ListInfo key={post._id} data={post} action={action => actions.openProfile(action)}/>
                            );
                        })}
                    </div>
                </div>
            </div>
          </div>
        );
    }
});
var NewsColumnn = React.createClass({
    render: function () {
        return (
            <p></p>
        );
    }
});
function ratingSort(a, b) {
    return b.rating - a.rating;
}
function states(state) {
    return {
        status: state.status,
        posts: state.posts,
        company: state.company
    };
}

function actions(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
export default connect(states, actions)(HomePage);
