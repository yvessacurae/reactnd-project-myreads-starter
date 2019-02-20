import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './views/Main';
import Search from './views/Search';
import { Switch, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
