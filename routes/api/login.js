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
router.post('/', (req, res) => {
    connection.query(`select * from user WHERE user = '${req.body.user}' and password = '${req.body.password}' `, (error, result, fields) => {
        if (error) {
            res.status(500).send(error);
        }
        if(result && result.length >= 1) {
            res.status(200).json({result}.result[0].role);
        }
        else {
            res.status(401).send("incorrect credentials");
        }
      //  console.log("data is ---------->", result[0].user);

    })
})

module.exports = router;