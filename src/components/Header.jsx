import { useState } from "react";
import Menu2LineIcon from "remixicon-react/Menu2LineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/assets/images/garageLogo3.webp" alt="garage" />
          </div>

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
              <li className="navbar-item">
                <div className="navbar-link">Home</div>
              </li>

              <li className="navbar-item">
                <div className="navbar-link">Our Products</div>
              </li>

              <li className="navbar-item">
                <div className="navbar-link">About Us</div>
              </li>

              <li className="navbar-item">
                <div className="navbar-link">Contact Us</div>
              </li>
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
    </div>
  );
}

export default Header;
