const express = require('express');
const router = express.Router();


//@Route Get API/auth
//@desc Test Route
//@access Public route: No token needed
router.get('/', (req,res) => res.send('Authorization route'))

module.exports = router;