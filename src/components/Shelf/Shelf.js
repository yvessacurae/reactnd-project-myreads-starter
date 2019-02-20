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

  changeShelf = (book, shelf) => {
    const { books } = this.state;
    let newList;
    if(shelf==='none') {
      newList = books.filter(element => element.id!==book.id)
    }
    
    this.setState({ books: newList })
  };
  
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
                onChange={(book, shelf) => { 
                  onChange(book, shelf)
                  this.changeShelf(book, shelf)
                }
              }
              /> 
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf