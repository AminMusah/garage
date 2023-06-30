import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import AboutUs from "../components/About Us";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <AboutUs />
      <Pricing />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
