import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const shelfs = [
    {
        value: 'currentlyReading', 
        display:'Currently Reading'
    },
    {
        value: 'wantToRead',
        display: 'Want to Read'
    },
    {
        value: 'read',
        display: 'Read'
    }
]

ReactDOM.render(<BrowserRouter><App shelfs={shelfs}/></BrowserRouter>, document.getElementById('root'))
