const express = require('express');
const router = express.Router();
const { getAllUsers,updateUserById, deleteUser,getUserById  } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

// Only logged-in Admin can access these routes
router.route('/')
  .get(protect, admin, getAllUsers);

router.route('/:id')
  .delete(protect, admin, deleteUser);
router.get('/:id', protect, admin, getUserById);
router.put('/:id', protect, updateUserById);

module.exports = router;
