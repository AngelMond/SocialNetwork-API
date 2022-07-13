const router = require('express').Router();

const userController = require('../../controllers/userController');

//All CRUD routes
router.get('/', userController.getAllUsers );
router.get('/user/:userId', userController.getOneUser );
router.post('/create', userController.createUser );
router.put('/update/:userId', userController.updateUser );
router.delete('/delete/:userId', userController.deleteUser );

module.exports = router ;