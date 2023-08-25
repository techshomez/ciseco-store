import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FiMenu, FiSearch, FiUser, FiX } from "react-icons/fi";
import { BsCart2, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("navbar");

  const handleMenu = () => {
    setOpenMenu("mobile");
  };

  const handleCloseMenu = () => {
    setOpenMenu("navbar");
  };

  return (
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
        <div to="" className="has_sub">
          templates
          <i>
            <BsChevronDown />
          </i>
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
  );
};

export default Navbar;
