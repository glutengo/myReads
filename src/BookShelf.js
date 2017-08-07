import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class BookShelf extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <BookList 
                        books={this.props.books}
                        shelfs={this.props.shelfs}
                        onUpdate={this.props.onUpdate}/>
                  </div>
            </div>
        )
    }
}

export default BookShelf;