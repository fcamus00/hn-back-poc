const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/hn/', indexRouter);

module.exports = app;
