import React from 'react'
import PropTypes from 'prop-types'
import './BookShelfChanger.css'

function BookShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select 
                onChange={(e) => props.onSetShelf(e.target.options[e.target.selectedIndex].value)}
                value={props.shelf || 'none'}>
                <option value="none" disabled>Move to...</option>
                {
                    // fill options with shelves
                    props.shelves.map((shelf) => (
                        <option 
                            key={shelf.value}
                            value={shelf.value}>
                            {shelf.display}
                        </option>
                    ))
                }
                {
                    // setting shelf to none only makes sense if one was set before
                    props.shelf && props.shelf !== "none" && (
                        <option value="none">None</option>
                    )
                }
            </select>
        </div>
    )        
}

BookShelfChanger.PropTypes = {
    shelves: PropTypes.array.isRequired,
    onSetShelf: PropTypes.func.isRequired,
    shelf: PropTypes.string
}

export default BookShelfChanger