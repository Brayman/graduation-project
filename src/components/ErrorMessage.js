import React from 'react';
var Message = React.createClass({
    close() {
        this.props.close();
    },
    render: function () {
        if (this.props.status.show) {
            return (
                <div className="FeedBack NavFeedBack">
                    <i className="remove icon Right ButtonClose"
                       onClick={this.close}>
                    </i>
                    <div className="FeedBackText Success" >
                        <i className={`${this.props.status.type} icon`}/>
                        {this.props.status.text}
                    </div>
                </div>
            );
        }
        return null;
    }
});
export default Message;
