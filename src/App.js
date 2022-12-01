import { Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Blog from "./Blog";
import Contact from "./Contact";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
