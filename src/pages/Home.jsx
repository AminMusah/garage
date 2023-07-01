import Hero from "../components/hero/Hero";
import Products from "../components/product/Products";
import AboutUs from "../components/about/AboutUs";
import Pricing from "../components/pricing/Pricing";
import Team from "../components/team/Team";
import Testimonials from "../components/testimonial/Testimonials";
import ContactUs from "../components/contact/ContactUs";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <AboutUs />
      <Pricing />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
