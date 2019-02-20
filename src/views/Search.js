import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../BooksAPI';
import Shelf from '../components/Shelf/Shelf';

class Search extends Component {
  state ={ 
    books: null
  }

  searchList = e => {
    let query = e.target.value;
    query &&
    api.search(query)
      .then(books => {
        this.setState({ books })
      })
  }

  changeShelf = (book, shelf) => {
    const { books } = this.state;
    books.forEach((element, index) => element.id===book.id ? books.splice(index, 1) : null)
    api.update(book, shelf)
  };


  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" onChange={this.searchList} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          { books && 
            <Shelf 
              status={'none'}
              books={books}
              onChange={this.changeShelf}
            />
          }
        </div>
      </div>
    )
  }
}

export default Search