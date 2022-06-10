import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(id));
  };
  return (
    <ul>
      <li key={id}>
        <p>
          {title }
          {' '}
          by
          {' '}
          {author}
          {' '}
        </p>
        <p>
          {category}
        </p>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>

    </ul>

  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
