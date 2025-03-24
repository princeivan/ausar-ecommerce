import React, { useContext } from "react";
import { BsStar } from "react-icons/bs";
import "./ProductDisplay.css";
import { GlobalContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDisplay = ({ url, name, price, description, id }) => {
  const { addToCart } = useContext(GlobalContext);
  const notify = () =>
    toast.success("Item added to cart!", {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  return (
    <section className="productdisplay">
      <div className="productdisplay-container">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={url} alt="product" />
            <img src={url} alt="product" />
            <img src={url} alt="product" />
            <img src={url} alt="product" />
          </div>
          <div className="productdisplay-img">
            <img src={url} alt="product" className="productdisplay-main-img" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h3>{name}</h3>
          <div className="product-right-description">{description}</div>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">Ksh {price}</div>
            <div className="productdisplay-right-price-old">KSh {price}</div>
            <div className="productdisplay-right-discount">-49%</div>
          </div>
          <div className="productdisplay-right-stars">
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <p>(122 verified ratings)</p>
          </div>
          <div className="productdisplay-right-size">
            <h3>Select Variant</h3>
            <div className="productdisplay-right-sizes">
              <div>Red</div>
              <div>Black</div>
              <div>Blue</div>
            </div>
            <button
              onClick={() => {
                addToCart(id);
                notify();
              }}
            >
              Add To Cart
            </button>
            <p className="productdisplay-right-category">
              Category: <span>Padlock</span>
            </p>
            <p className="productdisplay-right-category">
              Tags: <span>Modern, Latest</span>
            </p>
          </div>
        </div>
      </div>

      <div className="customer-review">
        <div>
          <h4>Customer Feedback</h4>
          <p>See all</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
