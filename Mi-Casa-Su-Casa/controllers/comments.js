var User = require('../models/user');

module.exports = {
  create
};

function create(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.comments.push(req.body);
    user.save(function(err) {
      res.redirect('/users');
    });
  });
}