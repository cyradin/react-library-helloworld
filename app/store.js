import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import booksReducer from '@reducers/books';
import userReducer from '@reducers/user';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    books: booksReducer,
    user: userReducer
  })
)

export default store;