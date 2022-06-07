const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { book: 'new book' }];

    case REMOVE_BOOK:
      return state.filter((book) => action.id !== book.id ?? book);

    default:
      return state;
  }
}

export const addBookAction = () => ({
  type: ADD_BOOK,
  book: {},
});

export const removeBookAction = () => ({
  type: REMOVE_BOOK,
  book_id: null,
});
