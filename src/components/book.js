import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(id));
  };

  const chapterVal = Math.round(Math.random() * 20);

  return (
    <div className="books-list-section">
      <ul>
        <p className="text-category">
          {category}
        </p>
        <li key={id}>
          <p className="author-text">
            {title}
          </p>
          <p className="author-author">
            {author}
          </p>
          <div className="button-text">
            <button type="button" className="text button">Comment</button>
            <button type="button" className="text button" onClick={handleDelete}>
              Delete
            </button>
            <button type="button" className="text button">Edit</button>
          </div>
        </li>
      </ul>

      <ul className="secondCol">
        <li>
          <div style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={Math.round((chapterVal / 20) * 100)} />
          </div>
        </li>
        <li className="percent-li">
          <p className="percentageVal">
            {Math.round((chapterVal / 20) * 100)}
            %
          </p>
          <p className="completed">completed</p>
        </li>
        <li />
      </ul>
      <li className="lastCol">
        <p className="currChapter">CURRENT CHAPTER</p>
        <p id="chapter">
          Chapter
          {' '}
          {chapterVal}
        </p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </li>

    </div>

  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
