const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = require('../../config/connection');



// @route GET api/tasks/test
// @desc  tests tasks route 
// @access public
router.get('/test', (req, res) => {
    res.json({
        message: "purvi works"
    });
})


// @route GET api/tasks
// @desc  get list of tasks
// @access public
router.get('/', (req, res) => {
    connection.query("select * from items", (error, result, fields) => {
        if (error) {
            res.status(500).send(error);
        }
        console.log("data is (purvi-associates)---------->", result);
        res.status(200).json({result});
    })
})

// // @route GET api/tasks/addTask
// // @desc  add task
// // @access public
// router.post('/addTask', (req, res) => {
//     connection.query("INSERT into task SET ? ", req.body, (error, result, fields) => {
//         if (error) {
//             console.log(error)
//             res.status(500).json({status:"NOK", message:error.sqlMessage})
//         }
//         console.log("data after post", result);
//         res.status(200).json({status:"OK"})
//     })
// })

// // @route PUT api/tasks/:id
// // @desc  update task
// // @access public
// router.put('/updateTask', (req, res) => {
//     let sql = `UPDATE task SET status = '${req.body.status}' WHERE taskId  = '${req.body.taskId}'`;

// //     let sql = "UPDATE task SET status= " + req.body.status + " WHERE taskId= " + ' req.body.taskId';
//     connection.query(sql, (error, result, fields) => {
//         if (error) {
//             console.log(error)
//             res.status(500).json({status:"NOK", message:error.sqlMessage})
//         }
//         console.log("data after put", result);
//         res.status(200).json({status:"OK"})
//     })
// })

module.exports = router;