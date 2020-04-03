const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    serviceType: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    merchantName: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    userName: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    gstinNo: {
        type: String,
        trim: true,
        default: null,
        required: false
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        select: true
    },
    phone: {
        type: String,
        trim: true,
        default: null,
        required: false
    },  
    location: {
        type: String,
        trim: true,
        select: true
    },  
    createdAt: {
        type: Date,
        default: Date.now()
    },
})
module.exports = mongoose.model('user', userSchema, 'Services.users')