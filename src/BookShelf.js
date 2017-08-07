import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class BookShelf extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <BookList/>
                  </div>
            </div>
        )
    }
}

export default BookShelf;