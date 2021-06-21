var User = require('../models/user');
const passport = require('passport');

module.exports = {
  create,
  new: newUser,
  index,
};



function newUser(req, res) {
    res.render('users/form', {user: req.params.id});
  }

  //add the googleid of the new user

  function create(req, res) {
    const user = new User(req.body, newUser);
    console.log(req.body)
    user.save(function(err) {
      if (err) return res.render('users/form');
      res.redirect('/users');
    });
  }

//modify it to only show user info corresponding to the google id 
  function index(req, res) {
    User.find({newUser}, function(err, users) {
      res.render('users/index', { users, user: req.user, name:req.query.name });
    });
  }


 


//   function show(req, res) {
//     User.findById(req.params.id, function(err, users) {
//         console.log(users)
//         res.render('users/profile', {
//           users
//         })
//       });
//   };
  


