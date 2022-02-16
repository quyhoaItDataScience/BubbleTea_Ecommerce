import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import About from "../components/about/About";
import News from "../components/news/News";
import Footer from "../components/footer/Footer";
import Copyright from "../components/copyright/Copyright";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <News />
      <Footer />
      <Copyright />
    </>
  );
};

export default Homepage;
