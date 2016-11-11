import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import booksReducer from '@reducers/books';

const store = createStore(
  combineReducers({
    routing: routerReducer,
    books: booksReducer
  })
)

export default store;