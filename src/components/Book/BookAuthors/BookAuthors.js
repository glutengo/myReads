import React, { Component } from 'react'
import './BookAuthors.css'

class BookAuthors extends Component {

    render() {
        return (
            <ul className="book-authors">
            {
                this.props.authors.map((author) => (
                    <li key={author}>{author}</li>
                ))
            }
            </ul>
        )
    }
}

export default BookAuthors