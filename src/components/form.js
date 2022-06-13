import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newAddedBooks = {
      title: title.value,
      author: author.value,
      category: category.value,
      item_id: uuidv4(),
    };
    dispatch(postBook(newAddedBooks));
    title.value = ''; author.value = ''; category.value = '';
  };

  return (
    <div className="form-div">
      <hr />
      <span className="form-title"> ADD NEW BOOK</span>
      <form onSubmit={onChange}>
        <input
          type="text"
          placeholder="Book title..."
          name="title"
          className="form-input book"
        />

        <input
          type="text"
          placeholder="Author"
          name="author"
          className="form-input author"
        />

        <select name="category" className="form-input category" onChange={onChange} required>
          <option value="" hidden>
            Category
          </option>
          <option value="Dramma">Dramma</option>
          <option value="Documentary">Documentary</option>
          <option value="Fiction">Fiction</option>
          <option value="Crime">Crime</option>
          <option value="Romance">Romance</option>
          <option value="Comedy">Comedy</option>
        </select>
        <button className="btn" type="submit">ADD BOOK</button>

      </form>
    </div>
  );
}
export default Form;
