import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from '../../Book/BookShelfChanger'
import BookAuthors from '../../Book/BookAuthors'
import BookCover from '../../Book/BookCover'
import './index.css'

function BookListItem(props) {
    const {book, shelves, onSetShelf} = props
    return (
        <div className="book-list-item">
            <div className="book-top">
                <BookCover
                    url={book.imageLinks ? book.imageLinks.thumbnail : ''}
                    title={book.title}
                    linkTarget={`/detail/${book.id}`}/>
                <BookShelfChanger
                    shelves={shelves}
                    shelf={book.shelf}
                    onSetShelf={(shelf) => onSetShelf(shelf)}/>
            </div>
            <div className="book-title">{book.title}</div>
            {
                book.authors && (
                    <BookAuthors
                        authors={book.authors}/>
                )
            }
        </div>
    )
}

BookListItem.propTypes = {
    shelves: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    onSetShelf: PropTypes.func.isRequired
}

export default BookListItem