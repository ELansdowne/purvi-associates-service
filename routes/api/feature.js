const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../../config/connection');



// @route GET api/features/test
// @desc  tests features route 
// @access public
router.get('/test', (req, res) => {
    res.json({
        message: "feature works"
    });
})


// @route GET api/features
// @desc  get list of features
// @access public
router.get('/', (req, res) => {
    connection.query("select * from feature", (error, result, fields) => {
        if (error) {
            res.status(500).send(error);
        }
        console.log("data is ---------->", result);
        res.status(200).json({result});
    })
})

module.exports = router;