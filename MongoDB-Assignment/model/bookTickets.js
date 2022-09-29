const mongoose = require('mongoose');
const bookTickets = mongoose.Schema({
    destination:String,
    planeNo:Number
  })

module.exports = mongoose.model('Booking_Details',bookTickets);