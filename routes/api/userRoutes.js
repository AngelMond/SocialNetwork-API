const router = require('express').Router();

const userController = require('../../controllers/userController');

//User CRUD routes
router.get('/', userController.getAllUsers);
router.get('/user/:userId', userController.getOneUser);
router.post('/create', userController.createUser);
router.put('/update/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);

//Add and Remove friend route
router.route('/:userId/friends/:friendId')
    .put(userController.addFriend)
    .delete(userController.removeFriend);

module.exports = router ;