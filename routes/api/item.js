const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
var connection = require('../../config/connection');
const auth = require('../../middleware/auth');

// @route GET api/items
// @desc  get list of items
// @access public
router.get('/', auth, (req, res) => {
    Item.find().then((result) => {
        console.log(result);
        res.status(200).json({
            message: "succesfull operation",
            data: result
        });
    })
})


// @route POST api/items
// @desc  get all items
// @access public
router.post('/', (req, res) => {
    const item = new Item(req.body);
    item.save((error, user) => {
        if (error) {
            console.log(error);
            res.status(400).json({
                message: error.message
            });
        } else {
            console.log(item);
            res.status(201).json({
                message: "item created succesfully"
            });
        }
    });
})

module.exports = router;