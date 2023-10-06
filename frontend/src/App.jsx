import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Delete from "./pages/Delete";

function App() {
  return (
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/books/Menu" element={<Menu />} />
      <Route path="/books/Delete" element={<Delete/>}/>
    </Routes>
  );
}
export default App;
