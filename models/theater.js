const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
  seats: {
    type: [[Number]],
    default: [ 
      [ 0, 0 ], 
      [ 0, 0 ], 
      [ 0, 0 ]]
  },
  price: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 30
  }
});

const TheaterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seats: {
    type: [[Number]],
    default: [
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0)
    ]     
  },
  seatsAvailable: {
    type: Number,
    default: 0
  },
  seats: {
    type: [[Number]],
    default: [
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0),
      Array.apply(null, Array(16)).map(Number.prototype.valueOf, 0)
    ]     
  },
  reservations: [ReservationSchema]
});

module.exports = mongoose.model('Theater', TheaterSchema);