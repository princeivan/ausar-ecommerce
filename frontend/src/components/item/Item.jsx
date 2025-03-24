import React, { useContext } from "react";
import "./item.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ id, name, price, url }) => {
  const { addToCart, getCartItemCount } = useContext(GlobalContext);
  const notify = () =>
    toast.success("Item added to cart!", {
      autoClose: 3000,

      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  return (
    <div className="item-container">
      <div className="item">
        <NavLink to={`/products/${id}`}>
          <img src={url} alt={name} className="img" />
          <h4>{name}</h4>
        </NavLink>
        <div className="item-prices">
          <p className="item-price-new">Ksh {price}</p>
          <p className="item-price-old">KSh {price}</p>
        </div>
        <button
          className="--btn --btn-primary --btn-block"
          onClick={() => {
            addToCart(id);
            notify();
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
