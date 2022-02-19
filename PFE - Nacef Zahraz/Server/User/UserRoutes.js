const router = require('express').Router()
const User  = require('./UserController');

// Add User  
router.post('/user/add',User.addUser);

// Get All Users
router.get('/users/get',User.getAllUsers);

// Delete User 
router.delete('/user/delete/:id',User.deleteUser);

// Get One User 
router.get('/user/get/:id',User.getUser);

// Update User
router.put('/user/update/:id',User.updateUser)

module.exports = router;