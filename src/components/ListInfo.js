var React = require('react');

var ListInfo = React.createClass({

    render: function() {
        return (
          <div className="Block">
            <img className="MediumImage Right Hover"
            src="https://lh3.googleusercontent.com/-2ISHLNjuIts/Vull4KcLT-I/AAAAAAAAAA8/iC8vzN3ycTU8McfvZzA5iZ700Sezpddiw/w595-h334-no/Non.png"
            alt=""/>
            <div className="RowAll">
              <div>
                <h4 className="PostText">Name</h4>
              </div>
              <div>
                <h4 className="PostText"><span className="Marker">Rating 10</span></h4>
              </div>
            </div>
            <p className="PostText">Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </div>
        )
    }
});

export default ListInfo;
