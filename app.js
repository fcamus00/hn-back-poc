var express = require('express');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/hn/', indexRouter);

module.exports = app;
