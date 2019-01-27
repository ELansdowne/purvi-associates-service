const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../../config/connection');



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
router.get('/', (req, res) => {
    connection.query("select * from issue", (error, result, fields) => {
        if (error) {
            res.status(500).send(error);
        }
        console.log("data is ---------->", result);
        res.status(200).json({result});
    })
})

module.exports = router;