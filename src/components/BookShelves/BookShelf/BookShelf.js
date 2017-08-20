import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from '../../BookList/BookList'
import './BookShelf.css'

class BookShelf extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        shelves: PropTypes.array.isRequired,
        onSetShelf: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <BookList 
                        books={this.props.books}
                        shelves={this.props.shelves}
                        onSetShelf={this.props.onSetShelf}/>
                  </div>
            </div>
        )
    }
}

export default BookShelf