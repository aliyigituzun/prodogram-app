//user mongodb model 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const { v4: uuidv4 } = require('uuid');

const userRoles = ['user', 'moderator', 'coach', 'admin'];

const userSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: false,
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [30, 'Username must be at most 30 characters long']
    },
    surname: {
        type: String,
        required: [true, 'Please enter a surname'],
        unique: false,
        trim: true,
        minlength: [3, 'Surname must be at least 2 characters long'],
        maxlength: [20, 'Surname must be at most 30 characters long']
    },
    identifier: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        trim: true,
    },
    telephone: {
        type: String,
        required: false,
        unique: false,
        //sparse: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [50, 'Password must be at most 50 characters long']
    },
    profileImage: {
        type: String,
        default: '/img/user.png'
    },
    role: {
        type: String,
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    },

});

userSchema.statics.createUser = async function (data, callback) {

    const User = this;

    if(!data.name || !data.surname || !data.email || !data.password) {
        return callback(false, null);
    }
    
    if(!validator.isLength(data.name, {min: 2, max: 30})) {
        return callback(false, null);
    }

    if(!validator.isEmail(data.email)) {
        return callback(false, null);
    }
    identifier = uuidv4();
    
    const user = new this({
        name: data.name,
        surname: data.surname,
        identifier,
        email: data.email,
        password: data.password,
        createtAt: Date.now(),
    });

    const newUser = new User(user);
    await newUser.save();

    return callback(null, newUser);
}

userSchema.statics.verifyUserEmail = function (identifier) {
    //sets isActive to true
    }

userSchema.statics.validateUser = function (telephone) {
    //mobile number verification required for coaching etc.
}

userSchema.statics.getUsers = async function () {
    
    const User = this;

    const users = await User.find({}).limit(20);

    return users;
}

userSchema.statics.getUser = async function (id) {
    const User = this;

    const user = await User.findById({_id: id});
    console.log(user)
    return user;
}

userSchema.statics.updateUser = async function (id, data) {

    const User = this;
    const updatedData = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        telephone: data.telephone,
        role: data.role,
        updatedAt: Date.now(),
    }

    await User.updateOne({_id: id}, updatedData)

    console.log(updatedData);
    
    return;

}

userSchema.statics.deleteUser = async function (id) {

    const User = this;
    await User.deleteOne({_id: id})

    return;

}



module.exports = mongoose.model('User', userSchema);