import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import booksReducer from '@reducers/books';
import userReducer from '@reducers/user';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    books: booksReducer,
    user: userReducer
  }),
  applyMiddleware(thunk)
)

export default store;