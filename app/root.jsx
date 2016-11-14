import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import DocumentTitle from 'react-document-title';
import store from '@app/store';
import routes from '@app/routes';

const history = syncHistoryWithStore(browserHistory, store)

export default class Root extends React.Component {
    render() {
        return (
            <DocumentTitle title="Super Library">
                <Provider store={store}>
                    <Router history={history}>
                        { routes }
                    </Router>
                </Provider>
            </DocumentTitle>
        );
    }
}

