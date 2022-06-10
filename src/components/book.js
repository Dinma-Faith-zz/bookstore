import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/actionCreators';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookAction(id));
  };
  return (
    <ul>
      <li key={id}>
        <p>
          {title }
          {' '}
        </p>
        <p>
          by
          {' '}
        </p>
        <p>
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
