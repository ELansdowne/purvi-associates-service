const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../../config/connection');
const Test = require('../../models/test');



// @route POST api/test
// @desc  tests route 
// @access public
router.post('/', (req, res) => {
    const test = new Test({
        title: req.body.title,
        name: req.body.name
    });
    test.save();
    console.log(test);
    res.status(201).json({
        message: "test works"
    });
})

// @route GET api/test
// @desc  tests route 
// @access public
router.get('/', (req, res) => {
    let data;
 Test.find().then((result) => {
     console.log(result);
     res.status(200).json({
         message: "succesfull operation",
         data:result
     });
 })
})

module.exports = router;