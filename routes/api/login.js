const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../../config/connection');
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// @route GET api/issues/test
// @desc  tests issues route 
// @access public
router.get('/test', (req, res) => {
    res.json({
        message: "issues works"
    });
})


// @route GET api/issues
// @desc  get list of issues
// @access public  
router.post('/', (req, res) => {
    let fetchedUser;
    console.log(req.body);
    User.findOne({
        userName: req.body.userName
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authorization failed user not found"
            });
        }
        fetchedUser=user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        console.log("correct pass", result);
        if (!result) {
            return res.status(401).json({
                message: "Authorization failed npot correct pass",
            });
        }
        const token = jwt.sign({userName: fetchedUser.userName, userId: fetchedUser._id}, 'checker string', {expiresIn: '1h'});
        res.status(200).json({token: token});
    }).catch(error => {
        return res.status(401).json({
            message: "Authorization failed",
            error: error
        });
    })
})

module.exports = router;