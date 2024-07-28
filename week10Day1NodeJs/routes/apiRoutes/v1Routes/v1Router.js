const express = require('express');
const booksRouter = require('./booksRoutes/booksRouter');
const authRouter = require('./authRoutes/authRouter');
const v1Router = express.Router();

v1Router.use(`/auth`, authRouter)
v1Router.use(`/books`, booksRouter)

module.exports = v1Router