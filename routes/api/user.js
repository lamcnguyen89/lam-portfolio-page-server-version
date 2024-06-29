const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//@Route POST API/users
//@desc Register user
//@access Public route: No token needed
// router.get('/', (req,res) => res.send('User route'));
router.post(
    '/', 
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter password with 6 or more characters').isLength({min: 6}),

    (req,res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('User route');
    }
);

module.exports = router;