const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
const auth = require('../../middleware/auth');

// @route GET api/items
// @desc  get list of items
// @access public
router.get('/', auth, (req, res) => {
	Item.find().then((result) => {
		console.log(result);
		res.status(200).json({
			data: result
		});
	}).catch(error => {
		res.status(500).json({
			data: error
		});
	});
});


// @route POST api/items
// @desc  get all items
// @access public
router.post('/', auth, (req, res) => {
	const item = new Item(req.body);
	item.save().then(result => {
		console.log(result);
		res.status(201).json({
			message: 'item created succesfully'
		});
	}).catch(error => {
		console.log(error);
		res.status(400).json({
			message: error.message
		});
	});
});

module.exports = router;