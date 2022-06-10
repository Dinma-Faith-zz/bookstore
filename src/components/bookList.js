import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import Book from './book';
import Form from './form';
import { fetchBookApi } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const arrOfBooks = Object.values(books);
  const newBooksArr = arrOfBooks[0];
  // newBooksArr.map((books) => console.log(books));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {newBooksArr.length > 0
          ? newBooksArr.map((book) => (
            <Book
              key={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.item_id}
            />
          ))
          : ''}
      </ul>

      <Form />
    </div>
  );
};
export default Books;
