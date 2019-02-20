import React, { Component } from 'react';
import MainHeader from '../components/MainHeader';
import Shelf from '../components/Shelf/Shelf'
import { Link } from 'react-router-dom'

import * as api from '../BooksAPI';

class Main extends Component {
  state = {
    books: null,
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
    this.updateShelf();
  }

  updateShelf = () => {
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
          onChange={this.changeShelf}
        />
      })
    )
  }

  changeShelf = (book, shelf) => {
    this.setState({ books: null });
    api.update(book, shelf)
      .then(() => {
        this.updateShelf();
      })
  };

  openSearchPage = () => this.setState({ showSearchPage: true });

  render() {
    const { books } = this.state;
    return(
      <div className="list-books">
        <MainHeader />
        <div className="list-books-content">
          <div>
            { books && this.shelfList() }
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            <button onClick={this.openSearchPage}>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Main;