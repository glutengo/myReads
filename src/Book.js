import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        shelf: PropTypes.string,
        shelfs: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        coverUrl: PropTypes.string,
        onSetShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.coverUrl}` }}></div>
                <div className="book-shelf-changer">
                    <select 
                        onChange={(e) => this.props.onSetShelf(e.target.options[e.target.selectedIndex].value)}
                        value={this.props.shelf}>
                        <option value="none" disabled>Move to...</option>
                        {
                            this.props.shelfs.map((shelf) => (
                                <option 
                                    key={shelf.value}
                                    value={shelf.value}>
                                    {shelf.display}
                                </option>
                            ))
                        }
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                {
                    this.props.authors.map((author) => (
                        <div key={author} className="book-authors">{author}</div>)
                    )
                }
                
            </div>
        );
    }
}

export default Book;