const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});


exports.Category = mongoose.model('Category', categorySchema);


