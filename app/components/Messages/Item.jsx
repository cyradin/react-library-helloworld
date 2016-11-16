import BEMHelper from 'react-bem-helper';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Loader from 'react-loader';
import _ from 'underscore';
import { dismiss } from '@actions/messages';

var classes = new BEMHelper({
  name: 'messages'
});

class Item extends React.Component {
    render() {
        return (
            <div {...classes({element: 'item', modifiers: this.props.type})}>
                <div {...classes('dismiss')} onClick={this.dismissMessage.bind(this)}>X</div>
                <div {...classes('text')}>{this.props.text}</div>
            </div>
        );
    }

    dismissMessage(e) {
        this.props.dispatch(dismiss(this.props.id));
    }
}

const mapStateToProps = function(store) {
    return {
        messages: store.messages
    };
}

export default connect(mapStateToProps)(Item);

