const expreess = require('express');
const router = expreess.Router();
const controller = require('./controller');

router.get('/users',controller.getAllUsers);
router.post('/adduser',controller.addUser);
router.post('/updateusers',controller.updateUser);
router.post('/deleteusers',controller.deleteUser);

module.exports = router;