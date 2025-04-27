const express = require('express');
const router = express.Router();
const { registerUser, loginUser, registerAdmin } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/registeradmin', protect,admin,registerAdmin);

module.exports = router;
