const { Thought, User } = require('../models');

const thoughtController = {

    //Method get all Users
    getAllThoughts: async (req,res)=>{
        try{
            const thoughtData = await Thought.find();
            res.status(200).json(thoughtData);
        }catch(err){
            res.status(500).json(err);
        }
     },

     //Method to search for a single thought
    getOneThought: async (req,res)=>{
        try{
            const thoughtData = await Thought.findOne({_id: req.params.thoughtId});

            //Check if thought exists
            const thoughtExists = await User.exists({_id: req.params.userId});
            if(!thoughtExists){
                res.status(400).json({message: 'Thought not found with that id'});
            }
            res.status(200).json(thoughtData);
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
            );
            res.status(200).json(createThought);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //Update thought
    updateThought: async(req,res)=>{
        try{
            const updatedThought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            res.status(200).json(updatedThought);

        }catch(err){
            res.status(500).send({message: 'Cannot update thought by its id'});
        }
    },
    
    //Delete thought 
    deleteThought: async(req,res)=>{
        try{    
            await Thought.findOneAndDelete({_id: req.params.thoughtId});
            res.status(200).send({message: 'Tought successfully deleted'});
        }catch(err){
            res.status(500).send({message: 'Cannot update thought by its id'});
        }
    },

    //Create reaction
    createReaction: async(req,res)=>{
        try{
            const createReaction = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new: true},
            );
            res.status(200).json(createReaction);
        }catch(err){
            res.status(500).send({message: 'Cannot create the reaction'})
        }
    },

    //Delete reaction
    deleteReaction: async(req,res)=>{
        try{

            await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {_id: req.params.reactionId}}},
                {runValidators: true, new: true},
            );

            res.status(200).send({message: 'Reaction deleted'})
        }catch(err){
            res.status(500).send({message: 'Cannot delete the reaction'})
        }
    }
}

module.exports = thoughtController;