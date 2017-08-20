import React, { Component } from 'react'
import './BackButton.css'

class BackButton extends Component {
    render() {
        return (
            <button 
                className="back-button"
                onClick={this.props.history.goBack}
                />
        )
    }
}

export default BackButton