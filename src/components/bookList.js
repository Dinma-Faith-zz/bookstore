import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div>
      <ul>
        { books.length > 0 ? books.map((book) => (<Book key={book.id} book={book} />)) : ''}
      </ul>

      <Form />
    </div>
  );
};
export default Books;
