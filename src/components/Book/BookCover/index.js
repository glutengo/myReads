import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.css'

function BookCover(props) {
    const style = { backgroundImage: `url(${props.url}` }
    const title = `cover of ${props.title}`
    if (props.linkTarget) {
        return (
            <Link 
                className="book-cover"
                to={props.linkTarget}
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

BookCover.PropTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkTarget: PropTypes.string
}

export default BookCover