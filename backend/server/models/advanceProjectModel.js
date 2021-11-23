const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let advanceProjectSchema = new Schema({
    description:{
        type: String,
    },
    observaciones:[{
        type: String
    }] 
});

module.exports = mongoose.model('advanceProject', advanceProjectSchema );