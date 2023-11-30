var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRoute');
var usersRouter = require('./routes/users');
const novedadRoute = require('./routes/novedadRoute')
const apiRoute = require('./routes/apiRoute')

var app = express();

var fileUpload = require('express-fileupload')
var cors = require('cors')

var session = require('express-session')
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'Pasfdasfdas',
  cookie: {maxAge: null},
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) =>{
  try{
    console.log(req.session.id_usuario)
    if(req.session.id_usuario){
      next()
    } else{
      res.redirect('/')
    }
  } catch(error){
    console.log(error)
  }
}

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/novedades', secured, novedadRoute)
app.use('/logout', indexRouter)
app.use('/api', cors(), apiRoute)


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
