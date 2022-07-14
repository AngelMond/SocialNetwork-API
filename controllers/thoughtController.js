const { Thought, User } = require('../models');


let thoughtController = {

    //Method get all Users
    getAllThoughts: async (req,res)=>{
        try{
         const thoughtData = await Thought.find();
            res.status(200).json(thoughtData);
         
        }catch(err){
            res.status(500).json(err)
        }
     },

     //Method to search for a single thought
    getOneThought: async (req,res)=>{
        try{
         const userData = await Thought.findOne({_id: req.params.thoughtId});
         res.status(200).json(userData);
         
        }catch(err){
         res.status(500).json(err);
        }
     },

      //Method to create a new User
    createThought: async(req,res)=>{
        try{

           const createThought = await Thought.create(req.body);
            
           //Find user that created the thought and update the thoughts field
            await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts:  createThought._id}},
                {runValidators: true, new: true}
            )

            res.status(200).json(createThought);
        }catch(err){
            res.status(500).json(err);
        }
    },


}

module.exports = thoughtController;