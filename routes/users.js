var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users')

var commentsCtrl = require('../controllers/comments');




router.get('/', userCtrl.show);
router.get('/about', userCtrl.about)


router.post('/comments', commentsCtrl.addComment);
router.post('/:id/comments', commentsCtrl.leaveComment);
router.delete('/:id/comments/:id', commentsCtrl.removeComment);


router.post('/', userCtrl.addAbout);
router.get('/search', userCtrl.findByCity)
router.get('/:id', userCtrl.getProfile)
router.delete('/:id', commentsCtrl.deleteComment);


module.exports = router;
