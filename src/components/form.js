import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from './redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const [book, setstate] = useState({ title: '', author: '' });

  const changeTitle = (event) => setstate({ ...book, title: event.target.value });
  const changeAuthor = (event) => setstate({ ...book, author: event.target.value });
  const onChange = () => {
    if (book.title && book.author) {
      book.id = uuidv4();
      dispatch(addBookAction(book));
      setstate({ title: '', author: '' });
    }
  };

  // const onchange = (e) => {
  //   setstate((state) => ({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //     id: uuidv4(),
  //   }));
  // };

  return (
    <form>
      <input
        type="text"
        placeholder="Book Title..."
        value={book.title}
        name="title"
        onChange={changeTitle}
      />

      <input
        type="text"
        placeholder="Author"
        value={book.author}
        name="author"
        onChange={changeAuthor}
      />
      <button type="button" onClick={(e) => { e.preventDefault(); onChange(); }}>Add Book</button>

    </form>
  );
}
export default Form;
