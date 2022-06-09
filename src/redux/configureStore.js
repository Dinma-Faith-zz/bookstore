import { combineReducers, legacy_createStore as createStore } from 'redux';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  categories: categoryReducer,
  books: booksReducer,
});

const store = createStore(rootReducer);

export default store;
