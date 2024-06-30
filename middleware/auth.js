// Take JSON Token which is a sort of encrypted password and ID code, and return it to the user in order to securely login to the website to do more sensitive things
// To do this we create a middleware. It is software that enables one or more kinds of communication or connectivity between applications or components in a distributed network
const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function(req,res, next) {

    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if(!token) {
        return res.status(401).json({ msg: 'No token. Authorization Denied... :('});
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next()
    }catch(err) {
        res.status(401).json({msg: 'Token is not valid'});
    }

}