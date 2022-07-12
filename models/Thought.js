const { Schema, Types } = require('mongoose');

const reactionSchema = require('./Reaction')
//Thought Schema
const thoughtSchema = new Schema({

    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxLength: 280},//Must be between 1 and 280 characters buscar delimiter filter o meter regex

    createdAt: {
        type: Date, 
        default: Date.now(),
    }, //Use a getter method to format the timestamp on query

    //The user that created this thought
    username: {
        type: String, 
        required: true},

    //These are like replies
    reactions: [reactionSchema],

    //Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
    },
    {
    toJSON: {
        getters: true,
        },
    }
);

//Use a getter method to format the timestamp on query
thoughtSchema.virtual('reactionCount')
.get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema)

module.exports = {
    Thought,
    thoughtSchema
};