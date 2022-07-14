const { Schema, Types, model } = require('mongoose');

const reactionSchema = require('./Reaction')

//Thought Schema
const thoughtSchema = new Schema({

    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxLength: 280},

    createdAt: {
        type: Date, 
        default: Date.now,
    },

    //The user that created this thought
    username: {
        type: String, 
        required: true
    },
    
    //These are like replies
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);

//Create virtual `reactionCount`, retrieves the length of the thought's `reactions` array field.
thoughtSchema.virtual('reactionCount')
.get(function(){
    return this.reactions.length;
});

//Use a getter method to format the timestamp
thoughtSchema.get(function(){
    let date = this.createdAt;
    console.log(date.toLocalDateString("en-US"));
});

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;