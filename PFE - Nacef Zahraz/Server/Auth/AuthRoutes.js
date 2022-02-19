const router = require('express').Router()
const user = require('./authController')
 
// Register
router.post('/user/register',user.register);

// Sign In
router.post('/user/signin',user.signin);
 

   
module.exports = router;