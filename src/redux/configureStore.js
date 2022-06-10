import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  categories: categoryReducer,
  books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
