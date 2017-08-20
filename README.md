This is my solution  for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). I started with the provided starter package and then added my own commits and moved to my own repository.

## Contents
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- components/ All react components. Each has a JS and a CSS file.
  +-- App - This is the root of the app. The initial data is loaded here. Routes are also set up here.
  +-- BackButton - A simple BackButton component ensuring it looks and behaves the same everywhere in the application.
  +-- Book - Collection of subcomponents to help build components to reflect a book. Used in BookDetails and BookListItem.
   +-- BookAuthors - List of Book Authors.
   +-- BookCategories - List of Book Categories.
   +-- BookPurchase - Buttons for info and preview link on google.
   +-- BookShelfChanger - Component to change the shelf a book is in.
  +-- BookDetails - Extra component to display the details of a book.
  +-- BookList - Component to display a list of books. Used in BookShelf and BookSearch.
   +-- BookListItem - Component to reflect a book as a list item
  +-- BookSearch - Component to search additional books and add them to the shelves.
  +-- BookShelves - BookShelves component, has a page title and a list of book shelves. Uses the BookShelf component.
   +-- BookShelf - BookShelf component, has a title and a list of books. Uses the BookList component.
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 +-- util/ - Util javascripts
  |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 |-- index.js - BrowserRouter was added here. Also the shelves are defined in this file and passed to the app.
 |-- index.css - Global styles. You probably won't need to change anything here.
|-- .gitignore 
|-- CONTRIBUTING.MD - Information about contributing to this repo. 
TL;DR - Fork and clone your own version of this to use it.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms 
for you to use with your app.
|-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Backend Server

To simplify the development process, a backend server to develop against was provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
