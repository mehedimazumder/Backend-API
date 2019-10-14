const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  }
});

module.exports = mongoose.model('User', userSchema);
