import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MainHeader from './components/MainHeader';
import Shelf from './components/Shelf/Shelf';

import * as api from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: null,
    showSearchPage: false,
    shelfList: [
      {
        title: "Currently Reading",
        status: "currentlyReading"
      },
      {
        title: "Want to Read",
        status: "wantToRead"
      },
      {
        title: "Read",
        status: "read"
      }
    ]
  }

  componentDidMount() {
    api.getAll()
      .then(data =>{
        this.setState({ books: data });
      })
  }

  shelfList = () => {
    const { shelfList, books } = this.state;
    return (
      shelfList.map(element => {
        const { title, status } = element
        return <Shelf 
          key={status}
          title={title}
          status={status}
          books={books}
        />
      })
    )
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <MainHeader />
            <div className="list-books-content">
              <div>
                { books ? this.shelfList() : null }
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
