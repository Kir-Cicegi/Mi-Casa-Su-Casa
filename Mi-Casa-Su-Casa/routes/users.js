var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users')




// router.get('/', userCtrl.index);
router.get('/', userCtrl.index);
router.get('/new', userCtrl.edit)
// router.post('/', userCtrl.create);
router.post('/users/:id', userCtrl.addToSchema);

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }
module.exports = router;
