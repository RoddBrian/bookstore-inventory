const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

// App configuration
const app = express();
app.use(bodyParser.json());

// Array to store book inventory
let books = [];

// API to add a new book
app.post('/books', (req, res) => {
  const book = { id: uuidv4(), ...req.body };
  books.push(book);
  res.status(201).send(book);
});

// API to retrieve all books
app.get('/books', (req, res) => {
  res.status(200).send(books);
});

// API to update a book's details
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...req.body };
    res.status(200).send(books[bookIndex]);
  } else {
    res.status(404).send({ message: 'Book not found' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
