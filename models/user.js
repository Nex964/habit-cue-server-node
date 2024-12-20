const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  userId: { type: String },
  token: { type: String }
});


export const User = mongoose.model('User', userSchema);