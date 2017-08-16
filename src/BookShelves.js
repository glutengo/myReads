import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookShelves extends Component {
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfs: PropTypes.array.isRequired,
        onSetShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  this.props.shelfs.map(shelf => (
                    <BookShelf
                      key={shelf.value}
                      title={shelf.display}
                      books={this.props.books.filter(book => book.shelf === shelf.value)}
                      shelfs={this.props.shelfs}
                      onSetShelf={(book, newShelf) => this.props.onSetShelf(book, newShelf)}/>
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
}

export default BookShelves