import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

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

BookAuthors.propTypes = {
    authors: PropTypes.array.isRequired
}

export default BookAuthors