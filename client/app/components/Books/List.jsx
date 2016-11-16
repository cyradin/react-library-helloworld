import { connect } from 'react-redux';
import Loader from 'react-loader';
import { list } from '@actions/books';

import Book from '@components/Books/Item';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.loadBooks();
    }

    render() {
        var list = this.props.books,
            books = [];

        for (var i = 0; i < list.length; i++) {
            books.push(
                <Book key={list[i].id} id={list[i].id}/>
            );
        }

        return (
            <Loader loaded={books.length > 0}>
                { books }
            </Loader>
        );
    }

    loadBooks() {
        this.props.dispatch(list());
    }
}

const mapStateToProps = function(store) {
    return {
        books: store.books,
    };
}

export default connect(mapStateToProps)(List);