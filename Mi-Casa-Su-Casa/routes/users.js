var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users')

var commentsCtrl = require('../controllers/comments');




// router.get('/', userCtrl.index);
router.get('/', userCtrl.show);

// router.post('/', userCtrl.create);
router.post('/:id/update', userCtrl.update);
router.post('/comments', commentsCtrl.addComment);

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }
module.exports = router;
