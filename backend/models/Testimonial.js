const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  comments: { type: String, required: true },
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
