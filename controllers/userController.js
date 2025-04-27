const User = require('../models/User');

// @desc    Get all users (admin only)
// @route   GET /api/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Don't send password
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a user (admin only)
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.deleteOne();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // @desc    Update user details
// @route   PUT /api/users/:id
// @access  Private
const updateUserById = async (req, res) => {
    try {
      const { name, email } = req.body;
  
      // Find user by ID
      const user = await User.findById(req.params.id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update user details
      user.name = name || user.name;
      user.email = email || user.email;
  
      // Save updated user
      await user.save();
  
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {updateUserById , getAllUsers, deleteUser ,getUserById};
