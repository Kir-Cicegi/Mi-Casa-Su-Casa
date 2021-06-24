var User = require('../models/user');
const passport = require('passport');

module.exports = {
  addAbout,
    show,
    about,
    findByCity,
    getProfile
//   index,
};

function about(req, res){
    res.render('users/form', {
        user:req.user
      })
}

function addAbout(req, res, next) {
    (console.log("it hits addabout"))
    req.user.city = req.body.city
    req.user.about = req.body.about
    req.user.interests = req.body.interests
    req.user.dob = req.body.dob
    req.user.phoneNo = req.body.phoneNo
      req.user.save(function(err) {
        res.redirect('/users');
      });
  }

//   function addAbout


//modify it to only show user info corresponding to the google id 


  function findByCity(req, res) {
      console.log(req.query.city)
   
    User.find({city: req.query.city}, function(err, user) {
        console.log(user)
      res.render('users/result', { user, name:req.query.name });
    });
  }





  function show(req, res) {
    console.log("this is req user",req.user)
        res.render('users/index', {
          user:req.user
        })
  };
  


  function getProfile(req, res) {
    console.log(req.query.city)
 
  User.findById(req.params.id, function(err, user) {
      console.log(user)
    res.render('users/profile', { user, name:req.query.name });
  });
}

