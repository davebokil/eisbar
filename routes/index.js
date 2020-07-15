var express = require('express');
var router = express.Router();

/* HOME */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eisbar Interactive' });
});

/* ABOUT */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* Services */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* Articles */
router.get('/articles', function(req, res, next) {
  res.render('articles', { title: 'Articles' });
});

/* Portfolio */
router.get('/portfolio', function(req, res, next) {
  res.render('coming', { title: 'Portfolio' });
});

/* Contact */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
