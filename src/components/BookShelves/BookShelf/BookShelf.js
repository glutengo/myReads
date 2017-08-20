import React from 'react'
import PropTypes from 'prop-types'
import BookList from '../../BookList/BookList'
import './BookShelf.css'

function BookShelf(props) {
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                <BookList 
                    books={props.books}
                    shelves={props.shelves}
                    onSetShelf={props.onSetShelf}/>
                </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onSetShelf: PropTypes.func.isRequired
}

export default BookShelf