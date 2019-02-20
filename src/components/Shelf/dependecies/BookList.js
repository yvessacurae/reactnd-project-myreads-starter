import React from 'react';
import Book from '../../Book/Book';

const BookList = props => {
  const { books, status, onChange } = props;
  return (
    books.map(book => <Book key={book.id} details={book} status={status} onChange={onChange} />)
  )
}

export default BookList