const { Schema, Types } = require('mongoose');



//This will not be a model, but rather will be used as the `reaction` field's subdocument schema 
//in the `Thought` model. (ONLY SCHEMA)
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId(),// Set default value into a new ObjectId
    },

    reactionBody: {
        type:String, 
        required: true, 
        maxLength: 280,
    }, //Anadir 280 characters como maximo

    username: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date, 
        default: Date.now(),
    }, //Use a getter method to format the timestamp on query
});

module.exports = reactionSchema;