const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../../config/connection');



// @route GET api/teams/test
// @desc  tests teams route 
// @access public
router.get('/test', (req, res) => {
    res.json({
        message: "team works"
    });
})


// @route GET api/teams
// @desc  get list of teams
// @access public
router.get('/', (req, res) => {
    connection.query("select * from team", (error, result, fields) => {
        if (error) {
            res.status(500).send(error);
        }
        console.log("data is ---------->", result);
        //  res.send(result);
        //  res.send("heer");
        res.status(200).json({
            result
        })
    })
})

// @route POST api/teams/addTeam
// @desc  add team
// @access public
router.post('/addTeam', (req, res) => {
    connection.query("INSERT into team SET ? ", req.body, (error, result, fields) => {
        if (error) {
            console.log(error)
            res.status(500).json({status:"NOK", message:error.sqlMessage})
        }
        console.log("data after post", result);
        res.status(200).json({status:"OK"})
    })
})

module.exports = router;