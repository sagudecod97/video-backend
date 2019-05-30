const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    required: true
  }
});

const Video = mongoose.model("Video", videoSchema);

module.exports = {
  Video
};
