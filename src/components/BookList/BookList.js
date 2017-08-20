import React from 'react'
import BookListItem from './BookListItem/BookListItem'
import './BookList.css'

function BookList(props) {
    return (
        <ol className="book-list">
            {
                props.books.map((book) => (
                    <li key={book.id}>
                        <BookListItem 
                            shelves={props.shelves}
                            book={book}
                            onSetShelf={shelf => props.onSetShelf(book, shelf)}
                        />
                    </li>
                ))
            }
        </ol>
    )
}

export default BookList