const { Thought } = require('../models');


let thoughtController = {
    
    getThoughts:  async (req,res)=>{
        try{
         const thoughtData = Thought.find();
            res.status(200).json(thoughtData);
         
        }catch(err){
            res.status(500).json(err)
        }
     }
}

module.exports = thoughtController;