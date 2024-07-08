# Bookstore Inventory System

## Description
This is a simple bookstore inventory system. It provides APIs to manage the book inventory using an in-memory array.

## Prerequisites
- Docker
- Docker Compose

## Getting Started
To get started with the bookstore inventory system, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/roddbrian/bookstore-inventory.git
   cd bookstore-inventory

2. **Build the Docker image**:

    ```sh
    
    docker build -t roddbrian/bookstore-inventory .

3. **Run the Docker container**:

    ```sh
    
    docker-compose up

4. **Access the APIs**:

    The API will be available at http://localhost:3000.

5. **API Endpoints**

    Add a Book
    URL: POST /books
    Description: Adds a new book to the inventory.
    Body: JSON object with title, author, isbn, and quantity fields.
    Example:
    {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "quantity": 10
    }
    Get All Books
    URL: GET /books
    Description: Retrieves all books in the inventory.
    Response:
    [
    {
        "id": "1",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "isbn": "9780743273565",
        "quantity": 10
    },
    {
        "id": "2",
        "title": "1984",
        "author": "George Orwell",
        "isbn": "9780451524935",
        "quantity": 5
    }
    ]
    Update a Book
    URL: PUT /books/:id
    Description: Updates a book's details identified by id.
    Body: JSON object with fields to update (title, author, isbn, or quantity).
    Example:
    {
    "quantity": 7
    }

    Contributing
    Contributions are welcome! If you have any suggestions or found a bug, please open an issue or submit a pull request.

    This README file provides clear instructions for setting up and running the bookstore inventory system, as well as details about the available API endpoints and continuous integration setup.
