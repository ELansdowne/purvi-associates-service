const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// @route GET api/login/test
// @desc  tests login route
// @access public
router.get('/test', (req, res) => {
	res.json({
		message: 'issues works'
	});
});


// @route GET api/login
// @desc  get user login
// @access public  
router.post('/', (req, res) => {
	let fetchedUser;
	User.findOne({
		userName: req.body.userName
	}).then(user => {
		if (!user) {
			return res.status(401).json({
				message: 'User not Found'
			});
		}
		fetchedUser = user;
		return bcrypt.compare(req.body.password, user.password);
	}).then(result => {
		if (!result) {
			return res.status(401).json({
				message: 'Incorrect UserName Password',
			});
		}
		const token = jwt.sign({
			userName: fetchedUser.userName,
			userId: fetchedUser._id
		}, 'checker string', {
			expiresIn: '1h'
		});
		res.status(200).json({
			token: token
		});
	}).catch(error => {
		return res.status(401).json({
			message: 'Authorization failed',
			error: error
		});
	});
});

module.exports = router;