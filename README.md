This is my solution  for the final assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). I started with the provided starter package and then added my own commits and moved to my own repository.

## Contents
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - This is the root of the app. The initial data is loaded here. Routes are also set up here.
 |-- App.css - Styles for the app. Little customization was made. If I were to really bring in other styles, I would have used something like react-material, but I did not fancy going that far.
 |-- App.test.js - Used for testing. No additional tests were implemented.
 |-- Book.js - Book component, used to display a books cover, title and authors. Also includes a select setting the book shelf. Props: 
 |-- BookList.js - BookList component, used to display a list of books. Uses the Book component.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. 
 |-- BookSearch.js - BookSearch component, includes an input field (controlledComponent) with backend communication and displays a list of books (search result; uses the BookList component).
 |-- BookShelf.js - BookShelf component, has a title and a list of books. Uses the BookList component.
 |-- BookShelves.js - BookShelves component, has a page title and a list of book shelves. Uses the BookShelf component.
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
