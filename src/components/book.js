import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <li>
        {title}
        {' '}
        by
        {author}

      </li>
      <button type="submit">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
