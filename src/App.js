import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'

import BookSearch from './BookSearch'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  updateBookShelf(book, shelf) {
    // update local state
    this.setState((state) => {
      let books = state.books
      const bookIndex = books.findIndex(b => b.id === book.id)
      // if book is already in any shelf, set new shelf
      if (bookIndex > -1) {
        books[bookIndex].shelf = shelf
      } else {
        // if book is not in any shelf yet, add it
        book.shelf = shelf
        books.push(book)
      }
      return { books: books }
    })
    // update remote
    BooksAPI.update(book, shelf)
  }

  componentDidMount() {
    // initially get all books
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelves
            books={this.state.books}
            shelfs={this.props.shelfs}
            onSetShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
        )} />
        <Route path="/search" render={() => (
          <BookSearch
            books={this.state.books}
            shelfs={this.props.shelfs}
            onSetShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
