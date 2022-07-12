const { Schema, Types } = require('mongoose');

const thoughtSchema = require('./Thought')
//User Schema
const userSchema = new Schema({

    username: {
        type: String, 
        unique: true, 
        required: true, 
        trim: true},

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





