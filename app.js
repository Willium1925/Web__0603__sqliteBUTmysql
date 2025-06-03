var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

// get請求，以json格式輸出資料庫中movie_quotes所有資料到網頁
// 從db.js中引入mysql2模組，並建立連線
const connectionDB = require('./db');
app.get('/movie_quotes', function(req, res) {
  connectionDB.query('SELECT * FROM movie_quotes', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});


