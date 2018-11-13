const mongoose = require('mongoose');


const SessionSchema = mongoose.Schema({
  theaterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    default: Date.now
  },
  end: {
    type: Date,
    default: Date.now + 200000
  },
  price: {
    type: Number,
    default: 10
  },
  seatsAvailable: {
    type: Number,
    deafault: 0
  },

});

module.exports = mongoose.model('Session', SessionSchema);