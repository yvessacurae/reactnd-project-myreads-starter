import React from 'react';
import Book from '../../Book/Book';

const BookList = props => {
  const { books, status } = props;
  return (
    books.map(book => <Book key={book.id} details={book} status={status}  />)
  )
}

export default BookList