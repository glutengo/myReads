import React, { Component } from 'react'
import './BookCategories.css'

class BookCategories extends Component {

    render() {
        return (
            <div className="book-categories">
                <i className="fa fa-tags" aria-hidden="true"></i>
                <ul>
                {
                    this.props.categories.map((category) => (
                        <li key={category}>{category}</li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default BookCategories