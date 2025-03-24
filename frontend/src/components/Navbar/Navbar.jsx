import React, { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context";

const activeLink = ({ isActive }) => {
  isActive ? `active` : `notactive`;
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [menu, setMenu] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const { getTotalCartItems } = useContext(GlobalContext);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const fixedNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);

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
  return (
    <header className={scrollPage ? `fixed` : null}>
      <div className="header">
        <p className="dancing-text">
          Summer sales for all Swim suits and free Express delivery- OFF 50%{" "}
        </p>
        <p>
          {" "}
          <FaPhoneAlt size={18} className="header-icon" /> +25412345532
        </p>
        <p>
          {" "}
          <MdMarkEmailRead size={18} className="header-icon" />
          Info@ausar.co.ke
        </p>
      </div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <h2>
                Ausar Cre<span>ative</span>
              </h2>
            </NavLink>
          </div>
          <div className="nav-items ">
            <ul className="--flex-center">
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
          <div className="navbar-left">
            <input
              type="text"
              placeholder="Search item..."
              className="search-bar"
            />

            {/* <NavLink to='/account'><li>Account <IoMdArrowDropdown size={20}/></li> </NavLink> */}
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
            <NavLink to="/help">
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
