const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
    required: true,
  },
},{timestamps:true});
exports.Blog = mongoose.model("Blog", blogSchema);
