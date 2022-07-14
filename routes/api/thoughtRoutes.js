const router = require('express').Router();

const thoughtController = require('../../controllers/thoughtController');


router.get('/', thoughtController.getAllThoughts);



router.post('/', thoughtController.createThought);


module.exports = router;