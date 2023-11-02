const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Poll = mongoose.model(
  'Poll',
  new Schema({
    name: { type: String, required: true},
    // author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: false },
    availabilities: { type: Object, required: true },
    location: { type: String },
    duration: { type: Number },
    responses: { type: Object },
  }, {
    timestamps: true
  })
);

module.exports = Poll;