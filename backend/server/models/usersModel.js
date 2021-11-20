const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['USER_ROLE','ADMIN_ROLE','LEADER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required:[true, 'El email es necesario'],
        unique: true
    },
    password:{
        type: String,
        required:[true, 'La contraseña es necesaria']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        ENUM: rolesValidos
    },
    state:{
        type: Boolean,
        default: true
    },
    projects:[{
        type:Schema.Types.ObjectId,
        ref: 'project'
    }]

});

userSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

userSchema.plugin(uniqueValidator, {message:'{PATH} debe ser unico'});

module.exports = mongoose.model('user', userSchema);