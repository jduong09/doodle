const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model(
  'User',
  new Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    surName: { type: String, required: true }
  })
);

module.exports = User;