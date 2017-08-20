import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf/BookShelf'
import './BookShelves.css'

function BookShelves(props) {
    return (
        <div className="book-shelves">
        <div className="book-shelves-title">
          <h1>MyReads</h1>
        </div>
        <div className="book-shelves-content">
          <div>
            {
              props.shelves.map(shelf => (
                <BookShelf
                  key={shelf.value}
                  title={shelf.display}
                  books={props.books.filter(book => book.shelf === shelf.value)}
                  shelves={props.shelves}
                  onSetShelf={(book, newShelf) => props.onSetShelf(book, newShelf)}/>
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
}

BookShelves.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onSetShelf: PropTypes.func.isRequired
}

export default BookShelves