import { useState } from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/product/Products";
import AboutUs from "../components/about/AboutUs";
import Pricing from "../components/pricing/Pricing";
import Team from "../components/team/Team";
import Testimonials from "../components/testimonial/Testimonials";
import ContactUs from "../components/contact/ContactUs";
import Menu2LineIcon from "remixicon-react/Menu2LineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import FacebookBoxLineIcon from "remixicon-react/FacebookBoxLineIcon";
import WhatsappLineIcon from "remixicon-react/WhatsappLineIcon";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <img src="/assets/images/garageLogo3.webp" alt="garage" />
          </a>

          <nav className={`navbar ${openMenu ? "navbar-active" : "navbar"}`}>
            <div className="wrapper">
              <figure className="logo">
                <img src="/assets/images/garageLogo3.webp" alt="logo" />
              </figure>

              <button
                className="nav-close-btn"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <CloseLineIcon />
              </button>
            </div>

            <ul className="navbar-list">
              <a href="#" className="navbar-item">
                <div className="navbar-link">Home</div>
              </a>

              <a href="#products" className="navbar-item">
                <div className="navbar-link">Our Products</div>
              </a>

              <a href="#team" className="navbar-item">
                <div className="navbar-link">Team</div>
              </a>
              <a href="#testimonials" className="navbar-item">
                <div className="navbar-link">Testimonials</div>
              </a>
              <a href="#about" className="navbar-item">
                <div className="navbar-link">About Us</div>
              </a>

              <a href="#appointment" className="navbar-item">
                <div className="navbar-link">Contact Us</div>
              </a>
            </ul>
          </nav>

          <button
            className="nav-open-btn"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <Menu2LineIcon />{" "}
          </button>

          <button className="btn btn-primary has-before has-after">
            Become A Partner
          </button>

          {openMenu === true ? (
            <div
              className="overlay-active overlay"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            ></div>
          ) : (
            ""
          )}
        </div>
      </header>
      <Hero />
      <Products />
      <AboutUs />
      <Pricing />
      <Team />
      <Testimonials />
      <ContactUs />
      <footer className="footer">
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <p className="footer-list-title">About Garage Mobilty</p>

              <p className="footer-text">
                Building the future of transportation for millions in Africa.
              </p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <YoutubeLineIcon />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <TwitterLineIcon />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <FacebookBoxLineIcon />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <WhatsappLineIcon />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  How it Works
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Sell
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Explore
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Terms & Services
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Community</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Partners
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Suggestions
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Pricing
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Wish List
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  My Account
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Promotional Offers
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; {year} Garage Mobilty. All Rights Reserved.
            </p>

            <ul class="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link">
                  Terms and conditions
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
