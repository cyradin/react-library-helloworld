import BEMHelper from 'react-bem-helper';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var classes = new BEMHelper({
  name: 'book'
});

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var book = this.props.book;
        var cover = <img src={book.cover || 'http://placehold.it/500x500'}/>
        var file = book.file
            ? <div {...classes('file')}>
                <a href={book.file}></a>
              </div>
            : '';
        var edit = '';

        if (this.props.user.isAuthorized) {
            edit = (
                <div {...classes('edit')}>
                    <Link to={`/books/${book.id}/edit`}>Edit</Link>
                </div>
            );
        }
        return (
            <div {...classes()}>
                <div {...classes('cover')}>
                    {cover}
                </div>
                <div {...classes('info')}>
                    {book.author} - {book.name}
                </div>
                <div {...classes('date')}>
                    Was read {book.readDate}
                </div>
                {file}
                {edit}
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        user: store.user
    };
}

export default connect(mapStateToProps)(Item);