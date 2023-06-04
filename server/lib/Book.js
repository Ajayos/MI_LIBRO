/**
 * Book Functions
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-17 10:04:13
 * @modified : 2023-06-04 10:15:30
 * @editor : Ajayos
 * @file : Book.js
 * @path : /lib/Book.js
 *
 * Description: Book functions for handling book-related actions.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

const { User, Book } = require("../Models");
const { v4: uuidv4 } = require("uuid");

/**
 * Create new Book.
 *
 * @param {Object} data - Book data for creating a new Book.
 * @param {string} data.isbn - ISBN id of the book.
 * @param {string} data.title - Title of the book.
 * @param {string} data.author - Author of the book.
 * @param {string} data.genre - Genre of the book.
 * @param {string} data.publicationDate - Published Date of the book.
 * @param {number} data.description - Description of the book.
 * @param {string} data.pic - image of the book.
 * @returns {Object} Response indicating the status, error, message, and data of the account creation process.
 */
exports.createBook = async (data) => {
  try {
    const { isbn, title, author, genre, publicationDate, description, pic } =
      data;
    var ISBN = isbn;

    // Find the book by ISBN
    const check = await Book.findOne({ ISBN });

    // If book is found
    if (check) {
      return {
        status: 409,
        error: true,
        message: "Book already exists",
        data: undefined,
      };
    }

    // create new book
    const newBook = new Book({
      ISBN,
      title,
      author,
      genre,
      publicationDate,
      description,
      pic,
    });

    // save it
    await newBook.save();

    return {
      status: 200,
      error: false,
      message: undefined,
      data: {
        message: "Book created successfully",
      },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Edit a Book.
 *
 * @param {Object} data - Book data for Edit a Book.
 * @param {string} data.id - id of the book.
 * @param {string} data.isbn - Update ISBN id of the book.
 * @param {string} data.title - Update Title of the book.
 * @param {string} data.author - Update Author of the book.
 * @param {string} data.genre - Update Genre of the book.
 * @param {number} data.description - Update Description of the book.
 * @param {string} data.pic - Update image of the book.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.editBook = async (data) => {
  try {
    const { id, isbn, title, author, genre, description, pic } = data;
    var ISBN = isbn;

    // check the book exists
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Update the book with the provided data
    book.ISBN = ISBN;
    book.title = title;
    book.author = author;
    book.genre = genre;
    book.description = description;
    book.pic = pic;

    await book.save();

    return {
      status: 200,
      error: false,
      message: "Book updated successfully",
      data: { message: "Book updated successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Like a book
 *
 * @param {Object} data - Data for the like a book
 * @param {String} data.id - ID of the book.
 * @param {String} data.user - User id.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.likeBook = async (data) => {
  try {
    const { id, user } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Find the user by ID
    const user_ = await User.findById(user._id);

    if (!user_) {
      return {
        status: 404,
        error: true,
        message: "User not found",
        data: undefined,
      };
    }

    // Check the like exists
    if (book.likes.includes(user._id)) {
      return {
        status: 200,
        error: true,
        message: "Book already exists",
        data: undefined,
      };
    }

    book.likes.push(user._id);
    await book.save();

    return {
      status: 200,
      error: false,
      message: "Liked book successfully",
      data: { message: "Liked book successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Unlike a book
 *
 * @param {Object} data - Data for the unlike a book
 * @param {String} data.id - ID of the book.
 * @param {String} data.user - User id.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.unlikeBook = async (data) => {
  try {
    const { id, user } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Find the user by ID
    const user_ = await User.findById(user._id);

    if (!user_) {
      return {
        status: 404,
        error: true,
        message: "User not found",
        data: undefined,
      };
    }

    // Check the like exists
    if (!book.likes.includes(user._id)) {
      return {
        status: 404,
        error: true,
        message: "Book not Liked",
        data: undefined,
      };
    }

    const index = book.likes.indexOf(user._id);
    book.likes.splice(index, 1);
    await book.save();

    return {
      status: 200,
      error: false,
      message: "Book unliked successfully",
      data: { message: "Book unliked successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Comment a book
 *
 * @param {Object} data - Data for the comment.
 * @param {String} data.id - ID of the book.
 * @param {String} data.user - User.
 * @param {String} data.message - message of the comment.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.commentBook = async (data) => {
  try {
    const { id, user, message } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Find the user by ID
    const user_ = await User.findById(user._id);

    if (!user_) {
      return {
        status: 404,
        error: true,
        message: "User not found",
        data: undefined,
      };
    }

    const commentId = uuidv4();
    book.comments.push({
      id: commentId,
      message: message,
      user: user._id,
      commentDate: Date.now(),
    });
    await book.save();
    return {
      status: 200,
      error: false,
      message: "Comment added successfully",
      data: { message: "Comment added successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Delete a book
 *
 * @param {Object} data - Data for Delete a book.
 * @param {String} data.id - ID of the book.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.deleteBook = async (data) => {
  try {
    const { id } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    const extBook = await Book.findByIdAndDelete(id);
    if (!extBook) {
      return {
        status: 404,
        error: true,
        message: "Book Not deleted",
        data: undefined,
      };
    }

    return {
      status: 200,
      error: false,
      message: "Book deleted successfully",
      data: { message: "Book deleted successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Update Status of a book
 *
 * @param {Object} data - Data for update status of a book.
 * @param {String} data.id - ID of the book.
 * @param {String} data.status - Update Status of the book.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.updateStatus = async (data) => {
  try {
    const { id, status } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }
    book.status = status;
    book.save();
    return {
      status: 200,
      error: false,
      message: "Status Updated successfully",
      data: { message: "Status Updated successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Request a book
 *
 * @param {Object} data - Data for request a book.
 * @param {String} data.id - ID of the book.
 * @param {String} data.user - User.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.requestBook = async (data) => {
  try {
    const { id, user } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Find the user by ID
    const user_ = await User.findById(user._id);

    if (!user_) {
      return {
        status: 404,
        error: true,
        message: "User not found",
        data: undefined,
      };
    }

    if (book.status !== "Available") {
      return {
        status: 409,
        error: true,
        message: "Book is not available for request",
        data: undefined,
      };
    }

    // Save the user ID to the request model
    book.request = user._id;
    book.status = "Processing";
    await book.save();

    return {
      status: 200,
      error: false,
      message: "Request submitted successfully",
      data: { message: "Request submitted successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Approve a request
 *
 * @param {Object} data - Data for approve a request.
 * @param {String} data.id - ID of the book.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.approveRequest = async (data) => {
  try {
    const { id } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Find the user by ID
    const user = await User.findById(book.request);

    if (!user) {
      return {
        status: 404,
        error: true,
        message: "User not found",
        data: undefined,
      };
    }

    // check access
    if (!user.access) {
      return {
        status: 403,
        error: true,
        message: "Access Denied",
        data: undefined,
      };
    }

    // account delete
    if (user.delete) {
      return {
        status: 204,
        error: true,
        message: "Account Deleted!",
        data: undefined,
      };
    }

    if (book.status !== "Processing") {
      return {
        status: 409,
        error: true,
        message: "Book request is not in the processing state",
        data: undefined,
      };
    }

    // Save the user ID to the request model
    book.request = null;
    book.status = "Rented";
    book.rented.push({
      id: uuidv4(),
      userid: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      rentDate: Date.now(),
    });
    await book.save();

    return {
      status: 200,
      error: false,
      message: "Book request approved successfully",
      data: { message: "Book request approved successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

/**
 * Return book
 *
 * @param {Object} data - Data for Return book.
 * @param {String} data.id - ID of the book.
 * @param {String} data.user - User.
 * @returns {Object} Response indicating the status, error, message, and data of the process.
 */
exports.returnBook = async (data) => {
  try {
    const { id, user } = data;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return {
        status: 404,
        error: true,
        message: "Book not found",
        data: undefined,
      };
    }

    // Find the user by ID
    const user_ = await User.findById(book.request);

    // check access
    if (user._id !== user._id) {
      return {
        status: 403,
        error: true,
        message: "Access Denied",
        data: undefined,
      };
    }

    if (book.status !== "Rented") {
      return {
        status: 409,
        error: true,
        message: "Book is not rented",
        data: undefined,
      };
    }
    // Get the rented book data
    const rentedBook = book.rented;
    if (!rentedBook) {
      return {
        status: 400,
        error: true,
        message: "No rented book data found",
        data: undefined,
      };
    }

    // Create a new buyer object with rented book data
    const newBuyer = {
      id: rentedBook.id,
      userid: rentedBook.userid,
      name: rentedBook.name,
      email: rentedBook.email,
      phone: rentedBook.phone,
      rentDate: rentedBook.rentDate,
      returnDate: Date.now(),
    };

    // Add the new buyer to the buyers array
    book.buyers.push(newBuyer);

    // Remove the rented book data
    book.rented = {};

    // Update the book status to 'Available'
    book.status = "Available";

    await book.save();

    return {
      status: 200,
      error: false,
      message: "Book returned successfully",
      data: { message: "Book returned successfully" },
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      message: "Internal server error",
      data: undefined,
    };
  }
};

