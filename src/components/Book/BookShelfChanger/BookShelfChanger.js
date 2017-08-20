import React, { Component } from 'react'
import './BookShelfChanger.css'

class BookShelfChanger extends Component {

    render() {
        return (
            <div className="book-shelf-changer">
                <select 
                    onChange={(e) => this.props.onSetShelf(e.target.options[e.target.selectedIndex].value)}
                    value={this.props.shelf || 'none'}>
                    <option value="none" disabled>Move to...</option>
                    {
                        // fill options with shelves
                        this.props.shelves.map((shelf) => (
                            <option 
                                key={shelf.value}
                                value={shelf.value}>
                                {shelf.display}
                            </option>
                        ))
                    }
                    {
                        // setting shelf to none only makes sense if one was set before
                        this.props.shelf && this.props.shelf !== "none" && (
                            <option value="none">None</option>
                        )
                    }
                </select>
            </div>
        )        
    }
}

export default BookShelfChanger