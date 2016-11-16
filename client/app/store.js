import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import booksReducer from '@reducers/books';
import messagesReducer from '@reducers/messages';
import userReducer from '@reducers/user';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    books: booksReducer,
    messages: messagesReducer,
    user: userReducer
  }),
  applyMiddleware(thunk)
)

export default store;