import React, { Component } from 'react';
import ShelfTitle from '../ShelfTitle/ShelfTitle';
import Book from '../Book/Book';
import BookList from './dependecies/BookList';

class Shelf extends Component {
  state = { books: null };

  componentDidMount() {
    const { books, status } = this.props;
    let booksList = books && books.filter(book => book.shelf===status);
    this.setState({ books: booksList })
  }
  
  render() {
    const { books } = this.state;
    const { title, status } = this.props
    return(
      <div className="bookshelf">
        <ShelfTitle>{title}</ShelfTitle>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books && <BookList books={books} status={status} /> }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf