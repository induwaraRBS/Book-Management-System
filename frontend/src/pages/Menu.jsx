import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Menu.css";
import { Link,  Navigate,  useNavigate, useParams } from "react-router-dom";

const Menu = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([]);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [Isbn, setIsbn] = useState([]);
  const Navigate = useNavigate();
  const handleSave = () => {
    const data = {
      title,
      author,
      Isbn,
    };
    setLoading(true);
    axios
      .post("http://localhost:3333/books", data)
      .then(() => {
        setLoading(false);
        Navigate('/')
      })
      .catch((err) => {
        setLoading(false);
        alert("Check the Entered Data Again");
        console.log(err);
      });
  };

  const handleDelete=(isbnToDelete)=>{
    setLoading(true);
    axios
    .delete(`http://localhost:3333/books/${isbnToDelete}`)
    .then(()=>{
      setLoading(false);
      Navigate('/books/Delete');
    }).catch((err)=>{
      setLoading(false);
      alert('Please try again! Some thing is wrong!')
      console.log(err)
    })
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3333/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="menu">
        <div>
          <h1>Add a new book</h1>
          {loading ? <h1>Loading...</h1> : ""}
          <div>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
               
              />
              
            </div>
            <div>
            <label>Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              
              />
              
            </div>
            <div>
            <label>ISBN</label>
              <input
                type="text"
                value={Isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>
            <button onClick={handleSave}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="Table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id} >
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.Isbn}</td>
                <td>
                  <div>
                     <button onClick={() => handleDelete(book.Isbn)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Menu;
