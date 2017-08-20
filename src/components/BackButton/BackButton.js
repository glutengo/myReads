import React from 'react'
import PropTypes from 'prop-types'
import './BackButton.css'

function BackButton (props) {
    return (
        <button 
            className="back-button"
            onClick={props.history.goBack}/>
    )
}

BackButton.PropTypes = {
    history: PropTypes.object.isRequired
}

export default BackButton