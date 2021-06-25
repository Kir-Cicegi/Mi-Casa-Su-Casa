var User = require('../models/user');
const passport = require('passport');

module.exports = {
  addAbout,
    show,
    about,
    findByCity,
    getProfile

};


function about(req, res){
    res.render('users/form', {
        user:req.user
      })
}

function addAbout(req, res, next) {
    req.user.city = req.body.city
    req.user.about = req.body.about
    req.user.interests = req.body.interests
    req.user.dob = req.body.dob
    req.user.phoneNo = req.body.phoneNo
      req.user.save(function(err) {
        res.redirect('/users');
      });
  }


  function findByCity(req, res) {
      User.find({city: req.query.city}, function(err, user) {
        res.render('users/result', { user, name:req.query.name });
    });
  }



  function show(req, res) {
      res.render('users/index', {
          user:req.user
        })
  };
  

  function getProfile(req, res) {
      User.findById(req.params.id, function(err, user) {
        res.render('users/profile', { user, name:req.query.name });
  });
}

