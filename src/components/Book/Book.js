import React, { Component } from 'react';
import Changer from '../Changer/Changer';
import * as api from '../../BooksAPI';

class Book extends Component {
  state = {
    details: null
  }

  componentDidMount() {
    this.setState({ details: this.props.details});
  }

  changeShelf = e => this.props.onChange(this.state.details, e.target.value);

  checkAuthors = authors => authors.length>1 ? authors.join(', ') : authors[0]

  render() {
    const { 
      id,
      imageLinks, 
      authors, 
      title } = this.props.details;
    const { status } = this.props;
    return(
      <li id={id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
            <Changer 
              status={status} 
              onChange={this.changeShelf}
            />
          </div>
          <div className="book-title">{title}</div>
          {authors && <div className="book-authors">{this.checkAuthors(authors)}</div>}
        </div>
      </li>
    )
  }
}

export default Book