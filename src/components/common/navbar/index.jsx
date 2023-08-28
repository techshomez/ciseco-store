import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FiMenu, FiSearch, FiUser, FiX } from "react-icons/fi";
import { BsCart2, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("navbar");
  const [openTemplate, setOpenTemplate] = useState(false);

  const handleMenu = () => {
    setOpenMenu("mobile");
  };

  const handleCloseMenu = () => {
    setOpenMenu("navbar");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <nav className={openMenu}>
          <Link to="">men</Link>
          <Link to="">women</Link>
          <Link to="">beauty</Link>
          <Link to="">sport</Link>
          <div
            to=""
            className="has_sub"
            onClick={() => setOpenTemplate(!openTemplate)}
          >
            templates
            <i>
              <BsChevronDown />
            </i>
            {openTemplate && (
              <div className="templa_sub">
                <div className="templa__sub__list">
                  <div className="templa__item">
                    <h1>Homepage</h1>
                    <div className="templa__item__list">
                      <Link to="/">Home</Link>
                      <Link to="/">Home</Link>
                      <Link to="/">Home</Link>
                      <Link to="/">Home</Link>
                      <Link to="/">Home</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div to="" className="has_sub">
            explore
            <i>
              <BsChevronDown />
            </i>
          </div>
        </nav>
        <div className="nav__icons">
          <span>
            <i>
              <FiSearch />
            </i>
          </span>
          <span>
            <i>
              <FiUser />
            </i>
          </span>
          <span>
            <i>
              <BsCart2 />
            </i>
            <small>3</small>
          </span>
        </div>
        <div className="hambuger" onClick={handleMenu}>
          <i>
            <FiMenu />
          </i>
        </div>
      </header>
    </>
  );
};

export default Navbar;
