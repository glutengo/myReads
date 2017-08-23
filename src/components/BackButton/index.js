import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function BackButton (props) {
    return (
        <button 
            className="back-button"
            onClick={props.history.goBack}/>
    )
}

BackButton.propTypes = {
    history: PropTypes.object.isRequired
}

export default BackButton