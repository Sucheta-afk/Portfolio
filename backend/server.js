const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB locally'))
  .catch(err => console.log('MongoDB connection error:', err));

// Import the Testimonial model
const Testimonial = require('./models/Testimonial'); // Adjust path as needed

// API endpoint to save testimonials
app.post('/api/testimonials', async (req, res) => {
  try {
    const { name, designation, comments } = req.body;
    const newTestimonial = new Testimonial({ name, designation, comments });

    await newTestimonial.save();
    res.status(201).send('Testimonial saved successfully');
  } catch (error) {
    console.error('Error saving testimonial:', error);
    res.status(500).send('Failed to save testimonial');
  }
});

// New endpoint to fetch testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).send('Failed to fetch testimonials');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
