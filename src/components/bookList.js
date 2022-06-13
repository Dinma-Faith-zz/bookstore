import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import Form from './form';
import { fetchBookApi } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const arrOfBooks = Object.values(books);
  const newBooksArr = arrOfBooks[0];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
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
        : 'Loading...'}

      <Form />
    </div>
  );
};
export default Books;
