import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function BookCategories(props) {
    return (
        <div className="book-categories">
            <i className="fa fa-tags" aria-hidden="true"></i>
            <ul>
            {
                props.categories.map((category) => (
                    <li key={category}>{category}</li>
                ))
            }
            </ul>
        </div>
    )
}

BookCategories.propTypes = {
    categories: PropTypes.array.isRequired
}

export default BookCategories