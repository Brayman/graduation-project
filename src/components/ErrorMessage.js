import React from 'react';
import '../../css/message.css';
var Message = React.createClass({
    close() {
        this.props.close();
    },
    render: function () {
        if (this.props.status.show) {
            return (
                <div className={`message type-${this.props.status.type}`}>
                    <i className="close-button remove icon"
                       onClick={this.close}>
                    </i>
                    <div className="message-text" >
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
