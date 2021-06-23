var User = require('../models/user');
const passport = require('passport');

module.exports = {
  update,
    show,
//   index,
};





function update(req, res) {
    User.findById(req.params.id, function(err, user) {
        
      user.push(req.body);
      user.save(function(err, user) {
        res.redirect('/users');
      });
    });
  }

//modify it to only show user info corresponding to the google id 

//if the googleId matches take them to that show page
//   function index(req, res) {
//       console.log("req query", req.query)
//       console.log("req params", req.params.id)
//     User.find({}, function(err, user) {
//       res.render('users/index', { user, name:req.query.name });
//     });
//   }


//   const _id = ObjectID(req.session.passport.user)


  function show(req, res) {
    console.log(req.user)
        res.render('users/index', {
          user:req.user
        })
  };
  


// function create(req, res) {
//     User.findById(req.params.id, function(err, user) {
//       user.about.push(req.body);
//       user.save(function(err) {
//         res.redirect('/users');
//       });
//     });
//   }


