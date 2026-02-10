// server/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Visitor MUST provide a name
    },
    phoneNumber: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        enum: ['Standard Room', 'Deluxe Room', 'Kumbh Tent', 'Dormitory'], // Specific options for Kumbh Mela
        default: 'Standard Room'
    },
    guests: {
        type: Number,
        min: 1,
        max: 10,
        default: 1
    },
    checkInDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Confirmed'
    }
});

module.exports = mongoose.model('Booking', bookingSchema);