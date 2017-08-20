import React, { Component } from 'react'
import './BookPurchase.css'

class BookPurchase extends Component {

    render() {
        return (
            <div className="book-purchase">
                <a href={this.props.previewLink}>
                    <i className="fa fa-eye" aria-hidden="true"/>
                    <span>Preview on Google Play</span>
                </a>
                <a href={this.props.infoLink}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"/>
                    <span>Buy on Google Play</span>
                </a>
            </div>
        )
    }
}

export default BookPurchase