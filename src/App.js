import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  state = {
    books: [],
    shelfs: []
  }

  // TODO: get shelfs out of books ?
  shelfs = [
    {
        value: 'currentlyReading', 
        display:'Currently Reading'
    },
    {
        value: 'wantToRead',
        display: 'Want to Read'
    },
    {
        value: 'read',
        display: 'Read'
    }]

  updateBook(book, shelf) {
    this.setState((state) => {
      let books = state.books;
      const bookIndex = books.findIndex(b => b.id === book.id);
      if (bookIndex > -1) {
        books[bookIndex].shelf = shelf;
      } else {
        book.shelf = shelf;
        books.push(book);
      }
      return { books: books }
    })
    BooksAPI.update(book, shelf)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf 
                  title="Currently Reading" 
                  books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                  shelfs={this.shelfs}
                  onUpdate={(book, shelf) => this.updateBook(book, shelf)}/>
                <BookShelf 
                  title="Want to Read" 
                  books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                  shelfs={this.shelfs}
                  onUpdate={(book, shelf) => this.updateBook(book, shelf)}/>
                <BookShelf 
                  title="Read" 
                  books={this.state.books.filter(book => book.shelf === 'read')}
                  shelfs={this.shelfs}
                  onUpdate={(book, shelf) => this.updateBook(book, shelf)}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            shelfs={this.shelfs}
            onUpdate={(book, shelf) => this.updateBook(book, shelf)} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
