import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAction } from './redux/books/books';

/* eslint-disable react/prop-types */
const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookAction(book.id));
  };
  return (
    <div>
      <ul>
        <li>
          {book.title }
          {' '}
          by
          {' '}
          {book.author}
        </li>
      </ul>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Book;
