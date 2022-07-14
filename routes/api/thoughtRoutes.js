const router = require('express').Router();

const thoughtController = require('../../controllers/thoughtController');

//Get all Thoughts
router.get('/', thoughtController.getAllThoughts);

//Get one Thought
router.get('/:thoughtId', thoughtController.getOneThought);

//Create New Thought
router.post('/', thoughtController.createThought);

//Update Thougth
router.put('/:thoughtId', thoughtController.updateThought);

//Delete Thougth
router.delete('/:thoughtId', thoughtController.deleteThought);



module.exports = router;