const router = require('express').Router();
const Lawyer  = require('./LawyersController');

// Add Lawyer  
router.post('/lawyer/add',Lawyer.addLawyer);

// Get All Lawyers
router.get('/lawyers/get',Lawyer.getAllLawyers);

// Delete Lawyer 
router.delete('/lawyer/delete/:id',Lawyer.deleteLawyer);

// Get One Lawyer 
router.get('/lawyer/get/:id',Lawyer.getLawyer);

// Update Lawyer
router.put('/lawyer/update/:id',Lawyer.updateLawyer)

module.exports = router;