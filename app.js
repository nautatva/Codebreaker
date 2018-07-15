var express = require('express');
var expressLess = require('express-less');

var app = express();
// var path = require('path');

app.set('views', __dirname, './views');
app.set('view engine', 'ejs');

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.get('/', function(req, res, next) {
  // var active = 'index';
  res.render(
    'views/pages/index'
    // , {
    //   active: 'index'
    // }
  );
});

// app.use(
//   '/stylesheets',
//   expressLess(__dirname + '/public/stylesheets', { compress: true })
// );

app.listen(3000);
