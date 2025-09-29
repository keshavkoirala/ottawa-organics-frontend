import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getProductById } from "./assets/data1";
import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";
import ExploreCat from "./components/ExploreCat";
import FeaturedProducts from "./components/FeaturedProducts";
import ItemCard from "./components/ItemCard";
import CategoryCard from "./components/CategoryCard";
import Benefits from "./components/Benefits";
import Offers from "./components/Offers";
import DailyBestSells from "./components/DailyBestSells";
import LoginOut from "./components/LoginOut";
import { Footer } from "./components/Footer";
import TopItemCat from "./components/TopItemCat";
import DirectAddToCart from "./components/DirectAddToCart";
import CartSection from "./components/CartSection";
import Copyrights from "./components/Copyrights";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";
import DeliveryDetail from "./components/DeliveryDetail";
import MobileNav from "./components/MobileNav";

const App = () => {
   const [selectedCategory, setSelectedCategory] = useState("Fruits");
   const [isCartVisible, setIsCartVisible] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [subtotal, setSubtotal] = useState(0);

   const toggleCartVisibility = () => {
      setIsCartVisible((prevVisible) => !prevVisible);
   };

   const handleSelectCategory = (category) => {
      setSelectedCategory(category);
   };

   const handleAddToCart = (item) => {
      setCartItems((prevItems) => {
         const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
         if (existingItem) {
            return prevItems.map((cartItem) =>
               cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
         } else {
            return [...prevItems, { ...item, quantity: 1 }];
         }
      });
   };

   useEffect(() => {
      const newSubtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
      setSubtotal(newSubtotal);
   }, [cartItems]);

   const product = getProductById("Fruits", "21");

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
   };

   return (
      <Router>
         <Navbar
            toggleCartVisibility={toggleCartVisibility}
            subtotal={subtotal}
            cartItems={cartItems}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
         />
         <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     {isCartVisible && (
                        <CartSection
                           cartItems={cartItems}
                           setCartItems={setCartItems}
                           setIsCartVisible={setIsCartVisible}
                           subtotal={subtotal}
                        />
                     )}
                     <Navbar2 />
                     <Hero />
                     <div className="containers shadow-lg p-6 md:p-8 mt-3 md:mt-10 bg-white">
                        <ExploreCat />
                        <CategoryCard onSelectCategory={handleSelectCategory} />
                     </div>
                     <div className="containers shadow-lg p-8 mt-12 md:mt-24 bg-white">
                        <FeaturedProducts />
                        <ItemCard selectedCategory={selectedCategory} handleAddToCart={handleAddToCart} />
                     </div>
                     <div className="containers shadow-lg p-8 mt-12 md:mt-20 bg-white">
                        <DailyBestSells />
                        {/* <DirectAddToCart handleAddToCart={handleAddToCart} /> */}
                     </div>
                     <Offers />
                     <TopItemCat />
                     {/* <LoginOut /> */}
                     <Benefits />
                  </>
               }
            />
            <Route
               path="/product/:id"
               element={
                  <div className="flex justify-center gap-8 mt-20">
                     <ProductDetail product={product} />
                     <DeliveryDetail />
                  </div>
               }
            />
            <Route path="/checkout" element={<Checkout />} />
         </Routes>
         <Footer /> 
         <Copyrights />
      </Router>
   );
};

export default App;
