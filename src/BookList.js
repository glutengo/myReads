import React, {Component} from 'react'
import Book from './Book'

class BookList extends Component {

    render() {
        return (
            <ol className="books-grid">
                {
                    this.props.books.map((book) => (
                        <li key={book.id}>
                            <Book 
                                shelfs={this.props.shelfs}
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