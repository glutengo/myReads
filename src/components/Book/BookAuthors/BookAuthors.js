import React from 'react'
import PropTypes from 'prop-types'
import './BookAuthors.css'

function BookAuthors(props)  {
    return (
        <ul className="book-authors">
        {
            props.authors.map((author) => (
                <li key={author}>{author}</li>
            ))
        }
        </ul>
    )
}

BookAuthors.PropTypes = {
    authors: PropTypes.array.isRequired
}

export default BookAuthors