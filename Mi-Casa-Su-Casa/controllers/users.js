var User = require('../models/user');
const passport = require('passport');

module.exports = {
  addToSchema,
edit,
  index,
};



function edit(req, res) {
    res.render('users/form', {user: req.params.id, name: req.query.name});

  }

  //add the googleid of the new user

//   function create(req, res) {
//       //use the the document with googleid and embed this new user info there
//     const user = new User(req.body, newUser);
//     console.log(req.body)
//     user.save(function(err) {
//       if (err) return res.render('users/form');
//       res.redirect('/users');
//     });
//   }



function addToSchema(req, res) {
    User.findById(req.params.id, function(err, user) {
        
      user.push(req.body);
      user.save(function(err, user) {
        res.redirect('/users');
      });
    });
  }

//modify it to only show user info corresponding to the google id 
  function index(req, res) {
    User.find({}, function(err, user) {
      res.render('users/index', { user, name:req.query.name });
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
  


