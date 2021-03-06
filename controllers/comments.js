var User = require('../models/user');
const passport = require('passport');
const user = require('../models/user');

module.exports = {
  addComment,
  deleteComment,
  leaveComment,
  removeComment
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

function leaveComment(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        console.log(req.body)
      user.comments.push(req.body);
      user.save(function(err) {
        res.redirect(`/users/${user._id}`);
      });
    });
  }



function deleteComment(req, res){
    User.findById(req.user.id, function(err, user){
        let incomingId = req.params.id;
        user.comments.id(incomingId).remove();
        user.save(function(err) {
            res.redirect('/users');
        })
    }
)};


//still working on the deleting the comments on other profiles.
function removeComment(req, res){
    console.log(user.id)
    User.findById(user.id, function(err, user){
        let incomingId = req.params.id;
        console.log(user)
        user.comments.id(incomingId).remove();
        user.save(function(err) {
            res.redirect(`/users/${user._id}`);
        })
    }
)};

