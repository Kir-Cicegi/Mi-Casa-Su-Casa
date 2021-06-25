var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi Casa Su Casa', user: req.user, name:req.query.name});
});

router.get('/welcome', function(req, res, next) {
  if (!req.user.dob ){
    res.render('users/form')
  }else {
    res.render('users/index', { title: 'Mi Casa Su Casa', user: req.user, name:req.query.name});
  }
});


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/welcome',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;
