var User = require('../models/user');
const passport = require('passport');

module.exports = {
  create,

  index,
};



// function newUser(req, res) {
//     res.render('users/index', { users, user: req.user, name:req.query.name });
//   }

  //add the googleid of the new user

  function create(req, res) {
      //use the the document with googleid and embed this new user info there
    const user = new User(req.body, newUser);
    console.log(req.body)
    user.save(function(err) {
      if (err) return res.render('users/form');
      res.redirect('/users');
    });
  }

//modify it to only show user info corresponding to the google id 
  function index(req, res) {
    User.find({}, function(err, users) {
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
  


