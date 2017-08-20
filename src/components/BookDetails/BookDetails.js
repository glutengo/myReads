import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../util/BooksAPI'
import { Link } from 'react-router-dom'
import BackButton from '../BackButton/BackButton'
import BookCover from '../Book/BookCover/BookCover'
import BookAuthors from '../Book/BookAuthors/BookAuthors'
import BookShelfChanger from '../Book/BookShelfChanger/BookShelfChanger'
import BookPurchase from '../Book/BookPurchase/BookPurchase'
import BookCategories from '../Book/BookCategories/BookCategories'
import './BookDetails.css'

class BookDetails extends Component {

    static propTypes = {
        bookId: PropTypes.string,
        book: PropTypes.object,
        shelves: PropTypes.array.isRequired,
        onSetShelf: PropTypes.func.isRequired
    }

    state = {}

    componentDidMount() {
        if (this.props.book) {
            this.setState({book: this.props.book})
        } else if (this.props.bookId){
            BooksAPI.get(this.props.bookId).then((book) => this.setState({book: book}));
        }
    }

    render() {
        const { shelves, onSetShelf } = this.props
        const { book } = this.state
        return this.state.book ? (
            <div className="book-details">
                <BackButton history={this.props.history}/>
                <div className="details">
                    <div className="book-title">{book.title}</div>
                    {
                        book.authors && (
                            <BookAuthors authors={book.authors}/>
                        )
                    }
                    <div className="book-top">
                        <BookCover
                            url={book.imageLinks ? book.imageLinks.thumbnail : ''}
                            title={book.title}/>
                        <BookShelfChanger
                            shelves={shelves}
                            shelf={book.shelf}
                            onSetShelf={(shelf) => onSetShelf(book, shelf)}/>
                    </div>
                    <div className="details-description">
                        {this.state.book.description}
                    </div>
                    <div className="book-published">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        {this.state.book.publishedDate}    
                    </div>
                    {
                        book.categories && (
                            <BookCategories categories={book.categories}/>
                        )
                    }
                    <BookPurchase
                        infoLink={book.infoLink}
                        previewLink={book.previewLink}/>
                    
                    
                </div>
            </div>
        ) : null
        
    }
}

export default BookDetails;