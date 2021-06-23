var User = require('../models/user');
const passport = require('passport');

module.exports = {
  addAbout,
    show,
    about
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

//if the googleId matches take them to that show page
//   function index(req, res) {
//       console.log("req query", req.query)
//       console.log("req params", req.params.id)
//     User.find({}, function(err, user) {
//       res.render('users/index', { user, name:req.query.name });
//     });
//   }





  function show(req, res) {
    console.log("this is req user",req.user)
        res.render('users/index', {
          user:req.user
        })
  };
  




