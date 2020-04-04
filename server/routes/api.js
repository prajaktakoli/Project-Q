const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/users')
const CustomerUser = require('../models/customerusers')
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

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized Req')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized Req')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized Req')
    }
    req.userId = payload.subject
    next()
}

router.post('/login', (req, res) => {
    let userData = req.body
    if (!req.body.phone || !req.body.password) {
        console.log('Error')
        res.status(401).send('Parameters Missing!')
    } else {
        try {
            User.findOne({ phone: userData.phone }, (error, user) => {
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
                            let payload = { subject: user._id }
                            let token = jwt.sign(payload, 'secretkey')
                            res.status(200).send({ token })
                            //.json({ message: 'Login successful!', user })
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
    if (!req.body.serviceType || !req.body.merchantName || !req.body.email || !req.body.password || !req.body.confirmpassword || !req.body.city || !req.body.locality) {
        console.log('Error')
        res.status(401).send('Parameters Missing!' + req.body)
    } else {
        try {
            let userData = req.body
            let user = new User(userData)
            await user.save((error, registeredUser) => {
                if (error) {
                    console.log('Error')
                    res.status(403).json({ message: 'Something went wrong' })
                } else {
                    let payload = { subject: registereduser._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({ token })
                }
            })
        } catch (error) {
            res.status(404).json({ message: "Something went wrong", error: error });
        }
    }

})

router.post('/customerlogin', (req, res) => {
    let userData = req.body
    if (!req.body.phone || !req.body.password) {
        console.log('Error')
        res.status(401).send('Parameters Missing!')
    } else {
        try {
            CustomerUser.findOne({ phone: userData.phone }, (error, user) => {
                if (error) {
                    console.log(error)
                } else {
                    if (!user) {
                        res.status(401).send('Invalid username')
                    } else {
                        if (user.password !== userData.password) {
                            res.status(401).json({ message: 'Invalid password', user })
                        } else {
                            let payload = { subject: user._id }
                            let token = jwt.sign(payload, 'secretkey')
                            res.status(200).send({ token })
                           // res.status(200).json({ message: 'Login successful!', user })
                        }
                    }
                }
            })

        } catch (error) {
            res.status(404).json({ message: "Something went wrong", error: error });
        }
    }
})

router.post('/customerregister', async (req, res) => {
    if (!req.body.name ||!req.body.email || !req.body.password || !req.body.confirmpassword || !req.body.city || !req.body.locality) {
        console.log('Error')
        res.status(401).send('Parameters Missing!' + req.body)
    } else {
        try {
            let userData = req.body
            let user = new CustomerUser(userData)
            await user.save((error, registeredUser) => {
                if (error) {
                    console.log('Error')
                    res.status(403).json({ message: 'Something went wrong' })
                } else {
                    let payload = { subject: registereduser._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({ token })
                }
            })
        } catch (error) {
            res.status(404).json({ message: "Something went wrong", error: error });
        }
    }

})


router.get('/merchant', verifyToken, (req, res) => {
    let binges = [
        {
            "id": "1",
            "name": "Guilty",
            "description": "Film",
            "date": "2018-04-30T02:15:12.356Z"
        },
        {
            "id": "2",
            "name": "Little Things- Season 1",
            "description": "Series",
            "date": "2020-01-20T02:15:12.356Z"
        },
        {
            "id": 1,
            "name": "Chopsticks",
            "description": "Film",
            "date": "2019-08-02T02:15:12.356Z"
        }
    ]
    res.json(binges)
})
module.exports = router