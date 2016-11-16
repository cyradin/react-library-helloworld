import { connect } from 'react-redux';
import Loader from 'react-loader';
import BEMHelper from 'react-bem-helper';

import { show } from '@actions/books';
import Message from '@components/Messages/Item';

var classes = new BEMHelper({
    name: 'messages'
});

class List extends React.Component {
    render() {
        var messages = this.props.messages,
            messageElements = [];

        for (var i = 0; i < messages.length; i++) {
            messageElements.push(
                <Message key={i} id={i} type={messages[i].type} text={messages[i].text} />
            );
        }

        return (
            <div {...classes()}>
                { messageElements }
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        messages: store.messages,
    };
}

export default connect(mapStateToProps)(List);