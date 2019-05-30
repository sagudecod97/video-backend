const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: true
    },
    title: {
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
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "Author",
      required: true
    },
    book:{
      type: mongoose.Schema.ObjectId,
      ref: "Book",
      required: true
    },
    video_url: {
      type: String,
      required: true
    },
    is_online: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = {
  Video
};
