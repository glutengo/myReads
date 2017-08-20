import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../../util/BooksAPI'
import BookShelves from '../BookShelves/BookShelves'
import BookDetails from '../BookDetails/BookDetails'
import BookSearch from '../BookSearch/BookSearch'
import './App.css'

class BooksApp extends Component {

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
        <Route exact path="/" render={(props) => (
          <BookShelves
            history={props.history}
            books={this.state.books}
            shelves={this.props.shelves}
            onSetShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
        )} />
        <Route path="/search" render={(props) => (
          <BookSearch
            history={props.history}
            books={this.state.books}
            shelves={this.props.shelves}
            onSetShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
        )}/>
        <Route path="/detail/:id" render={(props) => {
          console.log(props)
          if (this.state.books && this.state.books.length) {
            let book = this.state.books.find((book) => (book.id === props.match.params.id))
            if (book) {
              return (
                <BookDetails 
                  history={props.history}
                  book={book}
                  shelves={this.props.shelves}
                  onSetShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
              )
            }
          }
          return (
            <BookDetails
              history={props.history}
              bookId={props.match.params.id}
              shelves={this.props.shelves}
              onSetShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />
          )
        }}/>
      </div>
    )
  }
}

export default BooksApp
