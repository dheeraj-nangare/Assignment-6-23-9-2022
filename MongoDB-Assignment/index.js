const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const flightDEtailsRoutes = require('./routes/flights');
const bookTicketRoutes = require('./routes/bookticket')

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(flightDEtailsRoutes);
app.use(bookTicketRoutes);

mongoose.connect('mongodb://localhost:27017/FlightBooking',()=>{
  console.log("connected to database");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});