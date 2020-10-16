const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
 name: {
  type: String,
  required: true,
  trim: true
 },
 username: {
  type: String,
  required: true
 },
 password: {
  type: String,
  required: true
 },
 position: {
  type: String,
  default: 'Kasir',
  enum: ["Bos", "Manager", "Kasir"]
 },
 accessToken: {
  type: String
 }
});
 
const User = mongoose.model('user', UserSchema);
 
module.exports = User;