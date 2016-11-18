import { connect } from 'react-redux';

import BooksList from '@components/Books/List';
import MessageList from '@components/Messages/List';

class Content extends React.Component {
    render() {
        var content = this.props.children || BooksList;
        return (
            <article>
                <MessageList />
                {content}
            </article>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        auth: store.auth,
    };
}

export default connect(mapStateToProps)(Content);