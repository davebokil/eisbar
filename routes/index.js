const express = require('express');
const router = express.Router();

const Prismic = require('prismic-javascript');
const PrismicDOM = require('prismic-dom');

const apiEndpoint = 'https://eisbar-interactive.cdn.prismic.io/api/v2';

// Initialize the prismic.io api
function initApi(req) {
  return Prismic.getApi(apiEndpoint, {
    req: req
  });
}

/* HOME */
router.get('/', async function (req, res, next) {
  try {
    await initApi(req).then(function (api) {
      api.query(
        Prismic.Predicates.at('document.type', 'homepage')
      ).then(function (response) {
        const data = {
          mainBackground: response.results[0].data.main_background.url,
          mainTitle: response.results[0].data.main_title[0].text,
          subTitle: response.results[0].data.secondary_title[0].text,
          description: response.results[0].data.description[0].text,
          services: response.results[0].data.services.map(service => service.service_title[0].text)
        }
        res.render('index', { title: 'Eisbar Interactive', data });
      });
    });
  } catch (e) {
    console.log(e);
  }
});

/* ABOUT */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* Services */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

/* Articles */
router.get('/articles', function (req, res, next) {
  res.render('articles', { title: 'Articles' });
});

/* Portfolio */
router.get('/portfolio', function (req, res, next) {
  res.render('coming', { title: 'Portfolio' });
});

/* Contact */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
