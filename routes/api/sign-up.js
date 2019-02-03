const express = require('express');
const router = express.Router();
var connection = require('../../config/connection');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

// @route GET api/signup
// @desc  get list of users
// @access public
router.get('/', (req, res) => {
 User.find().then((result) => {
     console.log(result);
     res.status(200).json({
         message: "succesfull operation",
         data:result
     });
 })
})

// @route POST api/signUp
// @desc  signup user
// @access public
router.post('/', (req, res) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            userName: req.body.userName,
            password: hash,
            role: req.body.role
        });
        user.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: "user signed up",
                result: result
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                message: error
            });
        })
    })
})

module.exports = router;