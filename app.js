var createError = require('http-errors');
const bodyparser = require("body-parser");
var express = require('express');
var path = require('path');
var mongodb = require("mongodb");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expresshbs = require("express-handlebars");
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");
var MongoStore = require("connect-mongo")(session);
require('dotenv').config();
// var MongoClient = mongodb.MongoClient;
// const MONGODB_USER = "ayushalexx";
// const MONGODB_PASS = "antiwal";


var routes = require('./routes/index');
var userRoutes = require("./routes/user");

// var uristring = process.env.MONGOURI;

var app = express();

// const auth = { user: MONGODB_USER, password: MONGODB_PASS }

// MongoClient.connect(uristring, { useNewUrlParser: true, useUnifiedTopology: true });


require("./config/passport");

// view engine setup
app.engine('.hbs', expresshbs({ defaultLayout: 'layout', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
})

app.use('/user', userRoutes);
app.use("/", routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
