const router = require('express').Router();

const userController = require('../../controllers/userController');

//User CRUD routes
router.get('/', userController.getAllUsers);
router.get('/user/:userId', userController.getOneUser);
router.post('/create', userController.createUser);
router.put('/update/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);

//Add friend route
router.put('/:userId/friends/:friendId', userController.addFriend);

//Remove friend route
router.delete('/:userId/friends/:friendId', userController.removeFriend);



module.exports = router ;