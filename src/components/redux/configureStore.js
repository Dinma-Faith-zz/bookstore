import { combineReducers, legacy_createStore as createStore } from 'redux';
import books from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  categories: categoryReducer,
  books,
});

const store = createStore(rootReducer);

export default store;
