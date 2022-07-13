const { User } = require('../models');


let userController = {
    getUsers:  async (req,res)=>{
       try{
        const userData = User.find();
        res.status(200).json(userData);
        
       }catch(err){
        res.status(500).json(err)
       }
    }


}

module.exports = userController;