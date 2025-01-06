import React from "react";
import {BrowserRouter as Router  , Routes, Route } from "react-router-dom";

import Header from "../src/include/header.jsx";
import Footer from "../src/include/footer.jsx";
import Home from "../src/pages/home.jsx";
import Productgrid from "./pages/productgrid.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Products from "./pages/products.jsx";
import Productdetails from "./pages/productdetails.jsx";
import  Delivery from "./pages/delivery.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Relatedproducts from "./components/relatedproducts.jsx";
import { Build } from "./pages/build.jsx";
import Cart from "./pages/cart.jsx";
import Wishlist from "./pages/wishlist.jsx";
import Coin from "./components/coin.jsx";
import { Collections } from "./pages/collections.jsx";
import { Schemepayment } from "./pages/schemepayment.jsx";
import { Privacypolicy } from "./pages/privacypolicy.jsx";



const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
               
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/productgrid" element={<Productgrid />} />
        <Route path="/products/:cat/:subcat/:page/:wgt/:type/:collection" element={<Products />} />
        <Route path="/productdetails/:prono" element={<Productdetails />} />
        <Route path="/delivery-information" element={<Delivery />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/custom-jewellery" element={<Build />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/Collections/:page" element={<Collections />}/>
        <Route path="/scheme-payment" element={<Schemepayment />}/>
        <Route path="/privacy-policy" element={<Privacypolicy />}/>
        
        

        {/* <Route path="*" element={<Notfound404 />} /> Fallback route for 404 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
