import React, { useContext } from "react";
import { FaHome, FaList, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";
import { GlobalContext } from "../../context";

const BottomNav = () => {
  const { getTotalCartItems } = useContext(GlobalContext);
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <FaHome className="nav-icon" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/categories" className="nav-item">
        <FaList className="nav-icon" />
        <span>Categories</span>
      </NavLink>
      <NavLink to="/cart" className="nav-item cart-items">
        <FaShoppingCart className="nav-icon" />
        <span>Cart</span>
        <p>{getTotalCartItems()}</p>
      </NavLink>
      <NavLink to="/account" className="nav-item">
        <FaUser className="nav-icon" />
        <span>Account</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
