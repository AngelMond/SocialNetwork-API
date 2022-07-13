const { User } = require('../models');


let userController = {

    //Method get all Users
    getAllUsers:  async (req,res)=>{
       try{
        const userData = await User.find();
        res.status(200).json(userData);
        
       }catch(err){
        res.status(500).json(err);
       }
    },

    //Method to search for a single User
    getOneUser:  async (req,res)=>{
        try{
         const userData = await User.findOne({_id: req.params.userId});
         res.status(200).json(userData);
         
        }catch(err){
         res.status(500).json(err);
        }
     },

     //Method to create a new User
     createUser: async(req,res)=>{
        try{
           const createUser = await User.create(req.body);

            res.status(200).json(createUser);
        }catch(err){
            res.status(500).json(err);
        }
     },

     //Method to update a user
     updateUser: async (req,res)=>{
        try{    
            const userData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true}
            );

            res.status(200).json(userData);
        }catch(err){
            res.status(500).json({message: 'User not updated'});
        }
     },

     //Method to delete a user
     deleteUser: async (req, res)=>{
        try{
            await User.findOneAndDelete({_id: req.params.userId});

            res.status(200).send({message: 'User deleted'});

        }catch(err){
            res.status(500).json({message: 'User not deleted'});
        }
     },

     //Friends Methods

     //Add friend
     addFriend: async(req,res)=>{
        try{
            const addFriend = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {runValidators: true, new: true}
            );
            
            res.status(200).json(addFriend);

        }catch(err){
            res.status(500).send({message: 'Friend not added'})
        }
     },

     //Remove friend
     removeFriend: async(req,res)=>{
        try{
            const removeFriend = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {runValidators: true, new: true}
            );

            res.status(200).json(removeFriend);

        }catch(err){
            res.status(500).send({message: 'Friend not added'})
        }
     }

}

module.exports = userController;