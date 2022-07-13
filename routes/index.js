const router = require('express').Router();

const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.use('*', async(req,res)=>{
    try{
        res.status(300).send({message: `The endpoint doesn't exist`})
    }catch(err){
        res.status(500).send({message: 'unable to search any endpoint'})
    }
});

module.exports = router;