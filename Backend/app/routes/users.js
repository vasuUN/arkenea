const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser, getUser, upload } = require('../controllers/userController');

// Get all users
router.get('/', getAllUsers);

// Create a new user
router.post('/', upload.single('profileImage'), createUser);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

// Get a user by first name, last name, or email
router.get('/search', getUser);

module.exports = router;
