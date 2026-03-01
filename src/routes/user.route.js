const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Routes
router.post('/', userController.createUser);       // Create
router.get('/', userController.getUsers);         // Read All
router.get('/:id', userController.getUserById);   // Read One
router.put('/:id', userController.updateUser);    // Update
router.delete('/:id', userController.deleteUser); // Delete

module.exports = router;
// :id--> dynamic variable