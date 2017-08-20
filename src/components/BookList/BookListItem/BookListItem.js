import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelfChanger from '../../Book/BookShelfChanger/BookShelfChanger'
import BookAuthors from '../../Book/BookAuthors/BookAuthors'
import BookCover from '../../Book/BookCover/BookCover'
import './BookListItem.css'

class Book extends Component {

    static propTypes = {
        shelves: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
        onSetShelf: PropTypes.func.isRequired
    }

    render() {
        const {book, shelves, onSetShelf} = this.props
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
}

export default Book