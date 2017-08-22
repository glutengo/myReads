import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function BookPurchase(props) {
    return (
        <div className="book-purchase">
            <a href={props.previewLink}>
                <i className="fa fa-eye" aria-hidden="true"/>
                <span>Preview on Google Play</span>
            </a>
            <a href={props.infoLink}>
                <i className="fa fa-shopping-cart" aria-hidden="true"/>
                <span>Buy on Google Play</span>
            </a>
        </div>
    )
}

BookPurchase.PropTypes = {
    previewLink: PropTypes.string.isRequired,
    infoLink: PropTypes.string.isRequired
}

export default BookPurchase