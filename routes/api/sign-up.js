const express = require('express');
const router = express.Router();
var connection = require('../../config/connection');
const User = require('../../models/user');

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
    const user = new User({
        userName: req.body.userName,
        password: req.body.password,
        role: req.body.role
    });
    user.save((error, user) => {
        if(error) {
            console.log(error);
            res.status(400).json({
                message: error.errmsg
            });
        }
        else {
            console.log(user);
            res.status(201).json({
                message: "user signed up"
            });
        }
    });
})

module.exports = router;