const mongoose = require('mongoose');
const flightSchema = mongoose.Schema({
    flightNo: {
        type: Number,
        required: true,
        unique : true
    },
    trvaelCities: Array,
    flighTimmings: Array,
    planeCategory: String
})

module.exports = mongoose.model('Flight_Details',flightSchema);