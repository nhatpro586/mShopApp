import {typeDefs} from './graphql-config/schema'
import {resolvers} from './graphql-config/resolver'
import './mongo-config/mongodb'
import { GraphQLServer } from 'graphql-yoga'
import { getUser , verifyToken} from './graphql-config/config';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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

const server = new GraphQLServer({ typeDefs, resolvers,
  context: async req => {
    const token = req.request.headers.authorization || '';
    let ok = false
    ok = await verifyToken(token).catch( 
      e=> {
        ok = false
      }
    )
      console.log("token", token)
   // try to retrieve a user with the token
   const user = await getUser(token);

   // add the user to the context
   return { user: ok ? user: null };
  },
})
server.start(() => console.log('Server is running on localhost:4000'))


