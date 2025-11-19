
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  number: String
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

exports.findAllUsers = () => User.find().sort({ createdAt: -1 });
exports.findUserById = (id) => User.findOne({ id });
exports.findUserByEmail = (email) => User.findOne({ email });
exports.createUser = (data) => new User(data).save();
exports.updateUser = (id, data) => User.findOneAndUpdate({ id }, data, { new: true });
exports.deleteUser = (id) => User.findOneAndDelete({ id });
exports.searchUsers = (query) =>
  User.find({ $or: [{ name: new RegExp(query, "i") }, { email: new RegExp(query, "i") }] });
