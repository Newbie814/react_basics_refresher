import React from 'react';

import Book from './Book';
import { books } from '../assets/books.js';
import EventExamples from './EventExamples';

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book, index) => {
        return (
          <Book key={book.id} {...book} getBook={getBook} ranking={index + 1} />
        );
      })}
    </section>
  );
};

export default BookList;
