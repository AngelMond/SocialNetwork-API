const mongoose = require('mongoose');


//User Schema
const userSchema = new mongoose.Schema({

    username: {type: String, unique: true, required: true, trim: true},

    email: {
        type: String, 
        required: [true, 'Please enter an email adress'],
        unique: true, 
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please enter a valid email address.',
        ]
    },
    
    thoughts: [thoughtSchema], //Hace referencia al modelo Thought

    friends: [userSchema],//Hace referencia asi mismo
    
});

//Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});



//Thought Schema
const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, maxLength: 20},//Must be between 1 and 280 characters buscar delimiter filter o meter regex

    createdAt: {type: Date, default: Date.now}, //Use a getter method to format the timestamp on query

    //The user that created this thought
    username: {type: String, required: true},

    //These are like replies
    reactions: [reactionSchema],

    //Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
});


//This will not be a model, but rather will be used as the `reaction` field's subdocument schema 
//in the `Thought` model. (ONLY SCHEMA)
const reactionSchema = new mongoose.Schema({
    reactionId: {},

    reactionBody: {type:String, required: true, maxLength: 20 }, //Anadir 280 characters como maximo

    createdAt: {type: Date, default: Date.now}, //Use a getter method to format the timestamp on query
});