import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  Isbn: {
    type: Number,
    required: true,
  },
});
export const Book = mongoose.model("Book", bookSchema);
