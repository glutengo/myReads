import React, { Component } from 'react'
import * as BooksAPI from '../../util/BooksAPI'
import BookList from '../BookList/BookList'
import BackButton from '../BackButton/BackButton'
import './BookSearch.css'

class BookSearch extends Component {

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({query: query})
        query = query.trim()
        if (query.length) {
            // search for books
            BooksAPI.search(query.trim()).then((response) => {
                this.setState((state) => {
                    // if query was deleted in the meantime or the response is erroneous, set books to empty array
                    if (!this.state.query.length || !response || response.error) {
                        return { books: [] }
                    } else {
                        // else update books. Use books from shelves if possible as search results do not include shelf information
                        return { 
                            books: response.map((book) => {
                                const knownBook = this.props.books.find((b) => b.id === book.id)
                                if (knownBook) {
                                    book.shelf = knownBook.shelf
                                }
                                return book
                            }) 
                        }
                    }
                })
            })
        } else {
            this.setState({books: []})
        }
    }

    render() {
        return (
            <div className="book-search">
                <div className="book-search-bar">
                    <BackButton history={this.props.history}/>
                    <div className="book-search-input-wrapper">
                    {/* 
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                        type="text" 
                        placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="book-search-results">
                    <BookList 
                        books={this.state.books}
                        shelves={this.props.shelves}
                        onSetShelf={this.props.onSetShelf}/>
                </div>
            </div>
        )
    }
}

export default BookSearch