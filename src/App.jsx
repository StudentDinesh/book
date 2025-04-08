import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import OrderPopup from "./components/OrderPopup/OrderPopup";
import Books from "./components/BooksSlider/Books";
import Product from "./components/Product/Product";
import Author from "./components/Author/Author";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Services handleOrderPopup={handleOrderPopup} />
              <Banner />
              <AppStore />
              <Books />
              <Testimonial />
            </>
          } />

          <Route path="/author" element={<Author />} />
          <Route path="/products" element={<Product />} />
        </Routes>
        
        <Footer />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
