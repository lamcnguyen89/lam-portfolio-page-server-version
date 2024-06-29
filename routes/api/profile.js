const express = require('express');
const router = express.Router();


//@Route Get API/profiles
//@desc Test Route
//@access Public route: No token needed
router.get('/', (req,res) => res.send('Profiles route'))

module.exports = router;