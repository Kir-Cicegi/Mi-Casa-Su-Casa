var User = require('../models/user');
const passport = require('passport');

module.exports = {
  addComment,
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

