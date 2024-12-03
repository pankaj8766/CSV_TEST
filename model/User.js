const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // trim: true
  },
  Lang: {
    type: String,
    // required: true,
    // unique: true,
    // lowercase: true,
    // trim: true
  },
  mobileNumber: {
    type: String,
    // required: true,
    // unique: true,
    // trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
