const express = require('express');
const router = express.Router();


//@Route Get API/posts
//@desc Test Route
//@access Public route: No token needed
router.get('/', (req,res) => res.send('Posts route'))

module.exports = router;