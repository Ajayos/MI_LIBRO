# MI LIBRO

MI LIBRO is a book management system built with `Node.js`, `Express` and `Reactjs` with `MUI` Theme.

## Project Information

- Version: 1.0.1
- Repository: [https://github.com/Ajayos/MI_LIBRO](https://github.com/Ajayos/MI_LIBRO)
- Authors: [`Ajay o s`](https://github.com/Ajayos), [`Akarsh Krishna`](https://github.com/akarsh-krishna), [`	Abinas Sulaimans`](https://github.com/Abinas8055), [`Saran T K`](https://github.com/SARAN-TK), [`Yasir Muhd`](https://github.com/yasirmuhd)
- Created: 2023-05-17
- Modified: 2023-05-17
- Editor: Ajayos

## Description

MI LIBRO is a web application that allows users to manage books. It provides features such as adding new books, renting or selling books, tracking book status, and user interactions like comments and likes.

## Installation

1. Clone the repository:

 ```bash
git clone https://github.com/Ajayos/MI_LIBRO.git
```
2. Change to MI_LIBRO:

```bash
cd MI_LIBRO
```

3. Install the dependencies:

```bash
npm install
```
4. Set up the database configuration in the `.env` file.

5. Start the server:
```bash
npm start
```

## Usage

1. Start the server:
```bash
npm start
```
The server will start running on http://localhost:3000.

2. Access the MI LIBRO application in a web browser by visiting http://localhost:3000.

3. If a Public folder is found in the project directory, the server will serve the index.html file from the Public folder as a static file.
    - If the Public folder exists and contains an index.html file, it will be displayed in the web browser.
    - If the Public folder does not exist or does not contain an index.html file, the server will display a default "Server Running" message.

4. Use the provided routes to interact with the book management system. For example:

    - To view all books: GET /api/v1/books
    - To add a new book: POST /api/v1/books
    - To add a comment: POST /api/v1/books/:id/comments
    - To like a book: POST //api/v1books/:id/likes
    * *Replace :id with the actual ID of the book.

Note: Make sure to set up the database configuration in the .env file before starting the server.
