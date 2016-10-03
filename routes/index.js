var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kayla Wiest' });
});

/* GET about page */
router.get('/about', function(req, res, next){
  res.render('about', {title: 'About Kayla'});
});

/* GET project page */
router.get('/project', function(req, res, next){
  res.render('project', {title: 'Project Work'});
});

/* GET service page */
router.get('/service', function(req, res, next){
  res.render('service', {title: 'Services'});
});

/* GET contact page */
router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Contact'});
});


module.exports = router;
