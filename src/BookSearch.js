import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'

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
                        // else update books. Use books from shelfs if possible as search results do not include shelf information
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
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
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
                <div className="search-books-results">
                    <BookList 
                        books={this.state.books}
                        shelfs={this.props.shelfs}
                        onSetShelf={this.props.onSetShelf}/>
                </div>
            </div>
        )
    }
}

export default BookSearch