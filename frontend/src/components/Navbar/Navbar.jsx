import React, { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const activeLink = ({ isActive }) => {
  isActive ? `active` : `notactive`;
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [menu, setMenu] = useState("");
  const { getTotalCartItems, products, getProducts } =
    useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handlescroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const cart = (
    <span className="navbar-cart">
      <NavLink to="/cart">
        <FiShoppingCart size={20} />
        <p>{getTotalCartItems()}</p>
      </NavLink>
    </span>
  );
  const handleSearch = (e) => {
    e.preventDefault();
    getProducts("api/products/", searchQuery);
    navigate(`/shop/?query=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <header className={isSticky ? `fixed` : null}>
      <div className="header">
        <p className="dancing-text">Visit Our Store or Reach out to us on</p>
        <p>
          <FaPhoneAlt size={18} className="header-icon" /> +25412345532
        </p>
        <p>
          <MdMarkEmailRead size={18} className="header-icon" />
          Info@ausar.co.ke
        </p>
      </div>
      <nav className="main-nav">
        <div className="navbar">
          <div className="mobile-header --flex-center">
            <NavLink to="/">
              <h2>
                Ausar Cre<span>ative</span>
              </h2>
            </NavLink>
            <div className="mobile-icons">
              <div>
                <FaUser size={20} />
              </div>
              <div>{cart}</div>

              <div className="menu-icon">
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSearch} className="search-container">
              <input
                type="text"
                placeholder="Search item..."
                className="search-bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <FaSearch size={25} className="search-icon" />
              </button>
            </form>
          </div>

          <div className="navbar-left">
            <div
              className={
                showMenu ? `show-nav nav-items` : `hide-nav nav-items `
              }
            >
              <div
                className={
                  showMenu ? `nav-wrapper show-nav-wrapper` : `nav-wrapper`
                }
                onClick={hideMenu}
              >
                <ul className="nav-ul">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="account-dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span className="nav-link">
                <FaUser size={20} /> Account {menu === "account" ? "" : ""}
              </span>
              {showDropdown && (
                <div className="dropdown-menu">
                  <NavLink to="/my-order" className="dropdown-item">
                    My Orders
                  </NavLink>
                  <NavLink to="/admin" className="dropdown-item">
                    Admin
                  </NavLink>
                  <NavLink to="/my-account" className="dropdown-item">
                    My Account
                  </NavLink>
                  <NavLink to="/login" className="dropdown-item">
                    Sign In
                  </NavLink>
                  <NavLink to="/login" className="dropdown-item">
                    Sign Out
                  </NavLink>
                  <NavLink to="/register" className="dropdown-item">
                    Register
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/help" className="help">
              <li>Help</li>
            </NavLink>
            {cart}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
