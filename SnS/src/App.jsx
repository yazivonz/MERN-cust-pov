import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Feedbacks from './pages/Feedbacks';
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart"; // Import the Cart component

const App = () => {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default route for Home */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feedbacks" element={<Feedbacks />} /> 
          <Route path="/cart" element={<Cart />} /> {/* Added route for Cart */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
