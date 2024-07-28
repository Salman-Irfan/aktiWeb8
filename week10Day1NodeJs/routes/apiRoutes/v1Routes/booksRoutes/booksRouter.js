const express = require('express');
const readAllBooksController = require('../../../../controllers/booksControllers/readAllBooksController)');
const createBookController = require('../../../../controllers/booksControllers/createBookController');
const readBookByIdController = require('../../../../controllers/booksControllers/readBookByIdController');
const updateBookByIdController = require('../../../../controllers/booksControllers/updateBookByIdController');
const deleteBookByIdController = require('../../../../controllers/booksControllers/deleteBookByIdController');
const booksRouter = express.Router();

booksRouter.post(`/add-book`, createBookController)
booksRouter.get(`/read-all-books`, readAllBooksController)
booksRouter.get(`/read-book-by-id/:id`, readBookByIdController)
booksRouter.put(`/update-book-by-id/:id`, updateBookByIdController)
booksRouter.delete(`/delete-book-by-id/:id`, deleteBookByIdController)

module.exports = booksRouter