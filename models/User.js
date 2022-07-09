const mongoose = require('mongoose');


//User Schema
const User = new mongoose.Schema({

    username: {type: String, unique: true, required: true, trimmed: true},

    email: {type: String, required: true, unique: true, },//falta añadir validacion, debe hacer match con un email valido:  (look into Mongoose's matching validation)
    
    thoughts: [Thought], //Debe de contener el esquema de Thought

    friends: [User],//Debe hacer referencia asi mismo


    //Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
});

//Thought Schema
const Thought = new mongoose.Schema({
    thoughtText: {type: String, required: true, },//Must be between 1 and 280 characters

    createdAt: {type: Date, default: Date.now}, //Use a getter method to format the timestamp on query
    //The user that created this thought
    username: {type: String, required: true},

    //These are like replies
    reactions: [reactionSchema],

    //Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
});


//This will not be a model, but rather will be used as the `reaction` field's subdocument schema 
//in the `Thought` model. (ONLY SCHEMA)
const Reaction = new mongoose.Schema({
    reactionId: {},

    reactionBody: {type:String, required: true, }, //Anadir 280 characters como maximo

    createdAt: {type: Date, default: Date.now}, //Use a getter method to format the timestamp on query
});