// server/index.js (COMPLETE VERSION)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Fix for DNS issues
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

// Import the Booking Model
const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

// --- ROUTES ---

// 1. Test Route
app.get('/', (req, res) => {
    res.send('Nashik Kumbh 2026 Server is Running!');
});

// 2. CREATE Booking (POST)
app.post('/api/bookings', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        console.log("🆕 New Booking:", savedBooking.name);
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. GET ALL Bookings (THIS WAS MISSING!)
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
});

// 4. DELETE A BOOKING
app.delete('/api/bookings/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: "Booking Deleted Successfully" });
        console.log("🗑️ Booking Deleted");
    } catch (err) {
        res.status(500).json({ error: "Failed to delete booking" });
    }
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});