const { Schema, Types, model } = require('mongoose');

// const thoughtSchema = require('./Thought');


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
    //Reference thoughtSchema
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }], 

    //Reference userSchema
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    
    },
    {
    toJSON: {
        getters: true,
        },
        id: false,
    }
);

//Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});


const User = model('User', userSchema );
// 

module.exports = User;


