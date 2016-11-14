import { Route } from 'react-router';

import App from '@components/App';
import BooksView from '@components/Books/Item';
import BooksEdit from '@components/Books/Edit';
import BooksList from '@components/Books/List';
import ErrorComponent from '@components/Error';

const routes = (
    <Route path="/" component={App}>
        <Route path="/books" component={BooksList}/>
        <Route path="/books/add" component={BooksEdit} action="add"/>
        <Route path="/books/:id" component={BooksView}/>
        <Route path="/books/:id/edit" component={BooksEdit} action="edit"/>
        <Route path="*" component={ErrorComponent} code="404" />
    </Route>
);

export default routes;