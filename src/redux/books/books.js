import {
  addBookAction, fetchBookAction, loadingBookAction, removeBookAction,
} from './actionCreators';
import LOADING_DATA, { ADD_BOOK, REMOVE_BOOK, FETCH_BOOK } from './actions';

const urlApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mFOYG3UgB7zXZYknT5Tc/books';
const bookArr = {
  books: [],
  loading: false,
  error: false,
};

export default function booksReducer(state = bookArr, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state, books: state.books.concat(action.payLoad),
      };

    case LOADING_DATA:
      return {
        ...state,
      };

    case FETCH_BOOK:
      return {
        ...state, books: action.payLoad,
      };

    case REMOVE_BOOK:
      return { state, books: state.books.filter((book) => book.id !== action.payLoad) };
    default:
      return state;
  }
}

export const fetchBookApi = () => (dispatch) => {
  dispatch(loadingBookAction());
  fetch(urlApi).then((res) => res.json())
    .then(((data) => {
      const newBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) { newBooks.push({ ...data[key][0], item_id: key }); }
      });
      dispatch(fetchBookAction(newBooks));
    }));
};
export const postBook = (books) => (dispatch) => {
  fetch(urlApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((books)),
  })
    .then(() => {
      dispatch(addBookAction(books));
    });
};

// export const deleteBook = (id) => async (dispatch) => {
//   await fetch(`${urlLink}/${id}`, {
//     method: 'DELETE',
//     body: JSON.stringify({
//       item_id: id,
//     }),
//     headers: {
//       'content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   dispatch(removeBook(id));
// };

export const deleteBook = (id) => (dispatch) => {
  fetch(`${urlApi}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
  })
    .then(() => {
      dispatch(removeBookAction(id));
    });
};
