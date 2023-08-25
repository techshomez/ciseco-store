import { Link } from "react-router-dom";
import "./navbar.css";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="nav__link">
          <Link to="">men</Link>
          <Link to="">women</Link>
          <Link to="">beauty</Link>
          <Link to="">sport</Link>
          <Link to="">templates</Link>
          <Link to="">explore</Link>
        </div>
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
              <FiShoppingCart />
            </i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
