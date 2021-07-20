var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var projects = require('./routes/projects');
var djs = require('./routes/discordjs');
var nodejs = require('./routes/nodejs');
var topgg = require('./routes/topgg')
var djsfun = require('./routes/djsfun')
var npkg = require('./routes/np')
var twitch = require('./routes/twitch')
var github = require('./routes/github')
var paypal = require('./routes/paypal')





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', about);
app.use('/contact', contact);
app.use('/projects', projects);
app.use('/discordjs', djs);
app.use('/nodejs', nodejs);
app.use('/topgg', topgg);
app.use('/djsfun', djsfun);
app.use('/np', npkg);
app.use('/twitch', twitch);
app.use('/paypal', paypal);
app.use('/github', github);









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
