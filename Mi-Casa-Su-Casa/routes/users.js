var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users')




router.get('/', userCtrl.index);
router.get('/new', userCtrl.new);

router.post('/', userCtrl.create);


module.exports = router;
