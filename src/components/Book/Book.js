import React, { Component } from 'react';
import Changer from '../Changer/Changer';

class Book extends Component {
  render() {
    const { imageLinks, authors, title } = this.props.details;
    const { status } = this.props;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}")` }}></div>
            <Changer status={status} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors.length>1 ? authors.join(', ') : authors[0]}</div>
        </div>
      </li>
    )
  }
}

export default Book