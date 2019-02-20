import React, { Component } from 'react';
import ShelfTitle from '../ShelfTitle/ShelfTitle';
import Book from '../Book/Book';
import BookList from './dependecies/BookList';

class Shelf extends Component {
  state = { books: null };

  componentDidMount() {
    const { books, status } = this.props;
    let booksList;
    if(status!=='none')
      booksList = books.filter(book => book.shelf===status);
    else
      booksList = books;
    this.setState({ books: booksList })
  }
  
  render() {
    const { books } = this.state;
    const { title, status, onChange } = this.props
    return(
      <div className="bookshelf">
        {title && <ShelfTitle>{title}</ShelfTitle>}
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books && 
              <BookList 
                books={books} 
                status={status} 
                onChange={onChange}
              /> 
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf