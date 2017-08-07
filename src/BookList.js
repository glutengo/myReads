import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component {

    state = {
        books: [
            {
                title: 'To kill a mockingbird',
                author: 'Harper Lee',
                coverUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
            },
            {
                title: 'Ender\'s game',
                author: 'Orson Scott Card',
                coverUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
            }
        ]
    };

    render() {
        return (
            <ol className="books-grid">
                {this.state.books.map((book) => (
                    <li key={book.title}>
                        <Book 
                            title={book.title}
                            author={book.author}
                            coverUrl={book.coverUrl}
                        />
                    </li>))}
            </ol>
        )
    }
}

export default BookList;