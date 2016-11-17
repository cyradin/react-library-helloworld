import BEMHelper from 'react-bem-helper';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import _ from 'underscore';
import { mixin } from 'react-core-decorators';
import { autobind } from 'core-decorators';

// import DatePicker from 'react-datepicker';
// import moment from 'moment';

import { view, add, edit } from '@actions/books';
import formData from 'react-form-data';

// require('react-datepicker/dist/react-datepicker.css');

var classes = new BEMHelper({
  name: 'form'
});

@mixin(formData)
class Edit extends React.Component {
    constructor(props) {
        super(props);

        /*
        this.state = {
            startDate: moment(),
            book: null
        };

        this.dateChange = this.dateChange.bind(this);
        */
    }

    render() {
        var loaded = false,
            book;

        var emptybook = {
            id: null,
            name: '',
            author: '',
            readDate: '',
            allowDownload: '',
            file: '',
            cover: ''
        }

        book = Object.assign(emptybook, book);

        return (
            <Loader loaded={ (!!book.id) || this.props.route.action == 'add'} >
                <form {...classes()} onChange={this.updateFormData.bind(this)} onSubmit={this.onSubmit}>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Book name</label>
                        <input
                            {...classes('input')}
                            type="text"
                            name="name"
                            defaultValue={book.name} />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Author</label>
                        <input
                            {...classes('input')}
                            type="text"
                            name="author"
                            defaultValue={book.author} />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Read date</label>
                        <input
                            {...classes('input')}
                            type="text"
                            name="readDate"
                            defaultValue={book.readDate} />
                        {/*
                        <DatePicker selected={this.state.startDate} onChange={this.dateChange} dateFormat="YYYY-MM-DD" name="readDate" />
                        */}
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Cover</label>
                        <input
                            {...classes('input')}
                            type="file"
                            defaultValue="cover" />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>File</label>
                        <input
                            {...classes('input')}
                            type="file"
                            name="file" />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Allow download</label>
                        <input
                            {...classes('input')}
                            type="checkbox"
                            name="allowDownload"
                            defaultChecked={book.allowDownload} />
                    </div>
                    <div {...classes('field')}>
                        <label {...classes('label')}>Submit</label>
                        <input
                            {...classes('input')}
                            type="submit"
                            name="submit" />
                    </div>
                </form>
            </Loader>
        );
    }

    componentWillMount() {
        if (this.props.route.action == 'edit') {
            this.loadBook();
        }
    }

    getBook(id) {
        var id = parseInt(id || this.props.params.id);
        return _.findWhere(this.props.books, {id: id});
    }

    loadBook(id) {
        var id = parseInt(id || this.props.params.id);
        return this.getBook(id) || this.props.dispatch(view(id));
    }

    @autobind
    onSubmit(e) {
        e.preventDefault();
        switch (this.props.route.action) {
            case 'add':
                this.props.dispatch(add(this.formData))
                break;
            case 'edit':
                this.formData.id = parseInt(this.props.params.id);
                this.props.dispatch(edit(this.formData))
        }
    }

/*
    dateChange(date) {
        this.setState({
          startDate: date
        });
    }
*/
}

const mapStateToProps = function(store) {
    return {
        books: store.books,
        user: store.user
    };
}

export default connect(mapStateToProps)(Edit);