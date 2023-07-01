import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import FacebookBoxLineIcon from "remixicon-react/FacebookBoxLineIcon";
import WhatsappLineIcon from "remixicon-react/WhatsappLineIcon";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
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

          <ul className="footer-bottom-list">
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
  );
};

export default Footer;
