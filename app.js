var express = require('express');
var expressLess = require('express-less');

var app = express();
var path = require('path');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  res.render('pages/index', {
    active: 'index'
  });
});

app.get('/NGO', function(req, res, next) {
  res.render('pages/index', {
    active: 'ngo'
  });
});

app.get('/gallery', function(req, res, next) {
  res.render('pages/index', {
    active: 'gallery'
  });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/images',
  express.static(path.join(__dirname, 'public', 'images'))
  // expressLess(__dirname + '/public/images', { compress: true })
);

app.use(
  '/stylesheets',
  expressLess(__dirname + '/public/stylesheets', { compress: true })
);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});