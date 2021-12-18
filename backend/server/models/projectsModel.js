const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validPhase = {
    values: ['DEVELOPING', 'FINISHED'],
    message: '{VALUE} no es una fase valida'
}

let Schema = mongoose.Schema;

let projectSchema = new Schema({
    name:{
        type: String,
        required: [true, 'El nombre del proyecto es necesario.']
    },
    phase:{
        type: String,
        default: 'DEVELOPING',
        enum: validPhase
    },
    state:{
        type: Boolean,
        default: true
    },
    advance: [{
        type: Schema.Types.ObjectId,
        ref: 'advanceProject'
    }]
});



projectSchema.plugin(uniqueValidator,{message: '{PATH} debe ser unico'});
module.exports = mongoose.model('project', projectSchema)