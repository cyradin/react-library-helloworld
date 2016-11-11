import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import DocumentTitle from 'react-document-title';
import store from './store';

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

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <DocumentTitle title="Super Library">
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="/books" component={BooksList}/>
                    <Route path="/books/add" component={BooksView} action="add"/>
                    <Route path="/books/:id" component={BooksView}/>
                    <Route path="/books/:id/edit" component={BooksView} action="edit"/>
                    <Route path="*" component={ErrorComponent} code="404" />
                </Route>
            </Router>
        </Provider>
    </DocumentTitle>
    , document.getElementById('app')
);

