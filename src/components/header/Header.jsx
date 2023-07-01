import { useState } from "react";
import Menu2LineIcon from "remixicon-react/Menu2LineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
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
            <a
              href="#"
              className="navbar-item"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <div className="navbar-link">Home</div>
            </a>

            <a
              href="#products"
              className="navbar-item"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <div className="navbar-link">Our Products</div>
            </a>

            <a
              href="#team"
              className="navbar-item"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <div className="navbar-link">Team</div>
            </a>
            <a
              href="#testimonials"
              className="navbar-item"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <div className="navbar-link">Testimonials</div>
            </a>
            <a
              href="#about"
              className="navbar-item"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <div className="navbar-link">About Us</div>
            </a>

            <a
              href="#appointment"
              className="navbar-item"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
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
  );
};

export default Header;
