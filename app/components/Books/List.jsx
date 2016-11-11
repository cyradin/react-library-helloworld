import { connect } from 'react-redux';
import Loader from 'react-loader';
import booksList from '@actions/booksList';

import Book from '@components/Books/Item';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (! this.props.loaded) {
            this.loadBooks();
        }

        var list = this.props.books,
            books = [];

        for (var i = 0; i < list.length; i++) {
            books.push(
                <Book key={list[i].id} book={list[i]}/>
            );
        }

        return (
            <Loader loaded={this.props.loaded}>
                { books }
            </Loader>
        );
    }

    loadBooks() {
        booksList();
    }
}

const mapStateToProps = function(store) {
    return {
        books: store.books.data,
        loaded: store.books.loaded
    };
}

export default connect(mapStateToProps)(List);