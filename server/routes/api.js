const express = require('express')
const router = express.Router()
const User = require('../models/users')
const mongoose = require('mongoose')
const db = 'mongodb+srv://userprajakta:pwprajakta@cluster0-zkstr.mongodb.net/Services?retryWrites=true&w=majority'
router.get('/', (req, res) => {
    res.send('From API')
})
mongoose.connect(db, err => {
    if (err) {
        console.error('Error' + err)
    } else {
        console.log('Connect to Mongo Db')
    }
})

router.post('/login', (req, res) => {
    let userData = req.body
    if (!req.body.userName || !req.body.password) {
        console.log('Error')
        res.status(401).send('Parameters Missing!')
    } else {
        try {
            User.findOne({userName: userData.userName} , (error, user) => {
                if (error) {
                    console.log(error)
                } else {
                    if (!user) {
                        res.status(401).send('Invalid username')
                    } else {
                        if (user.password !== userData.password) {
                            res.status(401).json({ message: 'Invalid password', user })
                        } else {
                            //let payload = { subject: user._id }

                            res.status(200).json({ message: 'Login successful!', user })
                        }
                    }
                }
            })

        } catch (error) {
            res.status(404).json({ message: "Something went wrong", error: error });
        }
    }
})

router.post('/register', async (req, res) => {
    if (!req.body.serviceType || !req.body.merchantName || !req.body.email || !req.body.password || !req.body.location) {
        console.log('Error')
        res.status(401).send('Parameters Missing!')
    } else {
        try {
            let userData = req.body
            let user = new User(userData)
            await user.save((error, registeredUser) => {
                if (error) {
                    console.log('Error')
                    res.status(403).json({ message: 'Something went wrong' })
                } else {
                    let payload = { subject: registeredUser._id }
                    res.status(200).json({ message: 'User registered successfully', registeredUser })
                }
            })
        } catch (error) {
            res.status(404).json({ message: "Something went wrong", error: error });
        }
    }

})
module.exports = router