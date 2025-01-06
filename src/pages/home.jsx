import { useState, useEffect } from "react";
import Banner from "../components/banner";
import Coin from "../components/coin";
import Product from "../components/product";
import Shotbanner from "../components/shotbanner";
import Coingifts from "../components/coingifts";
import Products from "../components/products";
import Offer from "../components/offer";
import Insta from "../components/insta";
import Loader from "../components/Loader";
import ProductList from "../components/sproduct";

function Home() {
  const [loading, setLoading] = useState(true); // Corrected useState

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 15 seconds
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />; // Return Loader if still loading
  }

  return (
    <>
      <Banner />
      <Coin />
      <Product />
      <Shotbanner />
      <Coingifts />
      <Products />
      <Offer />
      <Insta />
    </>
  );
}

export default Home;
