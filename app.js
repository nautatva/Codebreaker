var express = require('express');
var expressLess = require('express-less');

var app = express();
// var path = require('path');

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  // var active = 'index';
  res.render(
    'pages/index'
    // , {
    //   active: 'index'
    // }
  );
});
// app.get('/views', function(req, res, next) {
//   // var active = 'index';
//   res.render(
//     'pages/departmentPage/index'
//     // , {
//     //   active: 'index'
//     // }
//   );
// });

app.use(
  '/stylesheets',
  expressLess(__dirname + '/public/stylesheets', { compress: true })
);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);
