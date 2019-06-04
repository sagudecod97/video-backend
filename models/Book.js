const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    authors: {
      type: [
        {
          name: String
        }
      ],
      required: true
    },
    isbn: {
      type: Number,
      required: true
    },
    published_year: {
      type: Number,
      required: true
    },
    publisher: {
      type: String,
      required: true
    },
    is_online: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
