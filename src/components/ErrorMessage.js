import React from 'react';

var Message = React.createClass({

    componentWillMount() {
        this.setState({status: this.props.status});
    },
    close: function () {
        this.setState({status: null});
    },
    render: function () {
        switch (this.state.status) {
            case 'всё хорошо':
                return (
                    <div className="FeedBack NavFeedBack">
                        <i className="remove icon Right ButtonClose"
                           onClick={this.close}>
                        </i>
                        <div className="FeedBackText Success" >
                            <i className="checkmark icon"/>
                            {this.state.status}
                        </div>
                    </div>
                );
            case '404':
                return (
                    <div className="FeedBack NavFeedBack">
                    <i className="remove icon Right ButtonClose"
                       onClick={this.close}>
                    </i>
                        <div className="FeedBackText Error" >
                            <i className="checkmark icon"/>
                            «не найдено» {this.state.status}
                        </div>
                    </div>
                );
            case '500':
                return (
                    <div className="FeedBack NavFeedBack">
                    <i className="remove icon Right ButtonClose"
                       onClick={this.close}>
                    </i>
                        <div className="FeedBackText Error" >
                            <i className="checkmark icon"/>
                            Bнутренняя ошибка сервера {this.state.status}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }
});
export default Message;
