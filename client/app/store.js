import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import booksReducer from '@reducers/books';
import messagesReducer from '@reducers/messages';
import authReducer from '@reducers/auth';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    auth: authReducer,
    books: booksReducer,
    messages: messagesReducer,
  }),
  applyMiddleware(thunk)
)

export default store;