import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const shelves = [
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

ReactDOM.render(<BrowserRouter><App shelves={shelves}/></BrowserRouter>, document.getElementById('root'))
