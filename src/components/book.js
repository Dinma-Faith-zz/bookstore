import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookAction(id));
  };
  return (
    <div>
      <ul>
        <li>
          {title }
          {' '}
          by
          {' '}
          {author}
        </li>
      </ul>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
