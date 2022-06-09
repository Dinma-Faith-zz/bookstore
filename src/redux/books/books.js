const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const bookArr = {
  books: [
    { id: 1, title: 'Forgive Yourself', author: ' Jared Singer' },
    { id: 2, title: 'Act like a lady', author: ' Steve Harvey' },
    { id: 3, title: 'Tales', author: ' Dinma Paul' },
  ],
};

export default function booksReducer(state = bookArr, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state, books: state.books.concat(action.book),
      };

    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.id) };
    default:
      return state;
  }
}

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});
