const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
