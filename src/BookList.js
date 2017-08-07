import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component {

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.title}>
                        <Book 
                            shelf={book.shelf}
                            shelfs={this.props.shelfs}
                            title={book.title}
                            authors={book.authors}
                            coverUrl={book.imageLinks.thumbnail}
                            onSetShelf={shelf => this.props.onUpdate(book, shelf)}
                        />
                    </li>))}
            </ol>
        )
    }
}

export default BookList;