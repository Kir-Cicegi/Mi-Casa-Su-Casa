var User = require('../models/user');
const passport = require('passport');
const user = require('../models/user');

module.exports = {
  addComment,
  deleteComment
};

function addComment(req, res, next) {
  User.findById(req.user.id, function(err, user) {
      console.log(req.body)
    user.comments.push(req.body);
    user.save(function(err) {
      res.redirect('/users');
    });
  });
}

function deleteComment(req, res) {
    User.findById(req.params.id, function(err, user){
        user.comments.id(req.body._id).remove();
  
            res.redirect('/users');
    })
}

// function deleteComment (req, res) {
//     console.log("it hits here")
//     console.log(req.params.id)
//     User.findByIdAndRemove(req.params.id)
//     console.log("this is x", x)
//         res.redirect('/users')
   
// }