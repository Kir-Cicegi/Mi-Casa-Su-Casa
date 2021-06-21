var User = require('../models/user');

module.exports = {
  create,
  new: newUser,
  index,
};



function newUser(req, res) {
    res.render('users/form', {user: req.params.id});
  }

  function create(req, res) {
    const user = new User(req.body);
    console.log(req.body)
    user.save(function(err) {
      if (err) return res.render('users/form');
      res.redirect('/users');
    });
  }

//modify it to only show user info corresponding to the google id 
  function index(req, res) {
    User.find({}, function(err, users) {
      res.render('users/index', { users });
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
  


