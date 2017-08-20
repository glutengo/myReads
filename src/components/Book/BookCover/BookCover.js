import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BookCover.css'

class BookCover extends Component {

    render() {
        const style = { backgroundImage: `url(${this.props.url}` }
        const title = `cover of ${this.props.title}`
        if (this.props.linkTarget) {
            return (
                <Link 
                    className="book-cover"
                    to={this.props.linkTarget}
                    style={style}
                    title={title}/>
                )
        } else {
            return (
                <div className="book-cover"
                    style={style}
                    title={title}>
                </div>
            )
        }
    }
}

export default BookCover