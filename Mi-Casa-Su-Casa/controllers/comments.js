var User = require('../models/user');

module.exports = {
  post,
};

function post(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.comments.push(req.body);
    user.save(function(err) {
      res.redirect('/users');
    });
  });
}
