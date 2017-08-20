import React, { Component } from 'react'
import BookListItem from './BookListItem/BookListItem'
import './BookList.css'

class BookList extends Component {

    render() {
        return (
            <ol className="book-list">
                {
                    this.props.books.map((book) => (
                        <li key={book.id}>
                            <BookListItem 
                                shelves={this.props.shelves}
                                book={book}
                                onSetShelf={shelf => this.props.onSetShelf(book, shelf)}
                            />
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default BookList