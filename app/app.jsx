import { Router, Route, Link, browserHistory } from 'react-router';
import DocumentTitle from 'react-document-title';

import Header from '@components/Header';
import Content from '@components/Content';
import Footer from '@components/Footer';

import BooksView from '@components/Books/View';
import BooksList from '@components/Books/List';

import ErrorComponent from '@components/Error';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content>
                    { this.props.children }
                </Content>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <DocumentTitle title="Super Library">
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/books/add" component={BooksView} action="add"/>
                <Route path="/books/:id" component={BooksView}/>
                <Route path="/books/:id/edit" component={BooksView} action="edit"/>
                <Route path="*" component={ErrorComponent} code="404" />
            </Route>
        </Router>
    </DocumentTitle>
    , document.getElementById('app')
);

