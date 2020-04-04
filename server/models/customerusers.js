const mongoose = require('mongoose')
const Schema = mongoose.Schema
const customeruserSchema = new Schema({ 
    name: {
        type: String,
        trim: true,
        default: null,
        required: true
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
    confirmpassword: {
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
    city: {
        type: String,
        trim: true,
        select: true
    }, 
    locality: {
        type: String,
        trim: true,
        select: true
    },  
    createdAt: {
        type: Date,
        default: Date.now()
    },
})
module.exports = mongoose.model('customeruser', customeruserSchema, 'Customers.users')