import React, {Component} from 'react'
import PropTypes from 'prop-types'


class Book extends Component {

    static defaultProps = {
        authors: []
    }

    static propTypes = {
        shelfs: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
        onSetShelf: PropTypes.func.isRequired
    }

    render() {
        const {book, shelfs, onSetShelf} = this.props
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                     style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''}` }}
                     title={`cover of ${book.title}`}></div>
                <div className="book-shelf-changer">
                    <select 
                        onChange={(e) => onSetShelf(e.target.options[e.target.selectedIndex].value)}
                        value={book.shelf || 'none'}>
                        <option value="none" disabled>Move to...</option>
                        {
                            // fill options with shelfs
                            shelfs.map((shelf) => (
                                <option 
                                    key={shelf.value}
                                    value={shelf.value}>
                                    {shelf.display}
                                </option>
                            ))
                        }
                        {
                            // setting shelf to none only makes sense if one was set before
                            book.shelf && book.shelf !== "none" && (
                                <option value="none">None</option>
                            )
                        }
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                {
                    book.authors && book.authors.map((author) => (
                        <div key={author} className="book-authors">{author}</div>
                    ))
                }
                
            </div>
        )
    }
}

export default Book