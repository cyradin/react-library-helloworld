import BEMHelper from 'react-bem-helper';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Loader from 'react-loader';
import _ from 'underscore';
import { view } from '@actions/books';

var classes = new BEMHelper({
  name: 'book'
});

class Item extends React.Component {
    render() {
        var book = this.getBook(),
            bookElement;
        if (book) {
            var cover = <img src={book.cover || 'http://placehold.it/500x500'}/>
            var file = book.file
                ? <div {...classes('file')}>
                    <a href={book.file}></a>
                  </div>
                : '';
            var edit = '';

            if (this.props.auth.authorized) {
                edit = (
                    <div {...classes('edit')}>
                        <Link to={`/books/${book.id}/edit`}>Edit</Link>
                    </div>
                );
            }

            bookElement = (
                <div {...classes()}>
                    <div {...classes('cover')}>
                        {cover}
                    </div>
                    <div {...classes('info')}>
                        <Link to={`/books/${book.id}`}>{book.author} - {book.name}</Link>
                    </div>
                    <div {...classes('date')}>
                        Was read {book.readDate}
                    </div>
                    {file}
                    {edit}
                </div>
            );
        }
        return (
            <Loader loaded={!!book}>
                {bookElement}
            </Loader>
        );
    }

    componentWillMount() {
        this.loadBook();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id) {
            this.loadBook();
        }
    }

    loadBook() {
        var id = this.props.id || this.props.params.id;
        return this.getBook() || this.props.dispatch(view(id));
    }

    getBook() {
        if (this.props.book) {
            return this.props.book;
        }
        var id = parseInt(this.props.id || this.props.params.id);
        return _.findWhere(this.props.books, {id: id});
    }
}

const mapStateToProps = function(store) {
    return {
        books: store.books,
        auth: store.auth
    };
}

export default connect(mapStateToProps)(Item);