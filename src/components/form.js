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
    <form onSubmit={onChange}>
      <input
        type="text"
        placeholder="Book Title..."
        name="title"
      />

      <input
        type="text"
        placeholder="Author"
        name="author"
      />

      <input
        type="text"
        placeholder="Category"
        name="category"
      />
      <button type="submit">Add Book</button>

    </form>
  );
}
export default Form;
