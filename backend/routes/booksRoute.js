import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();
//Adding a New Book

router.post("/", async (request, response) => {
  try {
    if (!request.body.title || !request.body.author || !request.body.Isbn) {
      return response.status(300).send({
        message: "Input All required Fields",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      Isbn: request.body.Isbn,
    };
    const book = await Book.create(newBook);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(404).send({ message: error.message });
  }
});

//Get All Books

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(404).send({ message: error.message });
  }
});

//Delete a book
router.delete("/:Isbn", async (request, response) => {
  const { Isbn } = request.params;
  try {
    const book = await Book.findOne({ Isbn });
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    } else {
      await book.deleteOne();
    }

    return response.json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(404).send({ message: error.message });
  }
});

export default router;
