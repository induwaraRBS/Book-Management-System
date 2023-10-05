import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(100).send("Welcome to the Book management system");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Application Connected to the Database");
    //The Express Server Only run if the database is connected
    app.listen(PORT, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
