import React, { useContext } from "react";
import "./cart.css";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const {
    products,
    addToCart,
    getCartItemCount,
    cartItems,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    clearCart,
  } = useContext(GlobalContext);
  const totalAmount = getTotalCartAmount();

  const handleContinueShoppin = () => {
    navigate("/");
  };

  return (
    <>
      {Object.keys(cartItems).length > 0 ? (
        <section className="cart">
          <div className="cart-products-section">
            <button className="cart-button">
              <FaLongArrowAltLeft size={25} />
              <h5 onClick={handleContinueShoppin}>Continue Shopping</h5>
            </button>
            <h4>Cart</h4>
            <hr />
            <div className="cart-grid">
              <div className="cart-items">
                {products.map(
                  (product) =>
                    cartItems[product.id] > 0 && (
                      <div key={product.id} className="cart-item">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          <h3>{product.title}</h3>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="remove-item"
                          >
                            <Trash2 /> <h4>Remove</h4>
                          </button>
                        </div>
                        <div className="cart-item-actions">
                          <div className="cart-item-price">
                            <h5>Ksh {product.new_price.toLocaleString()}</h5>
                          </div>
                          <div className="quantity-controls">
                            <button onClick={() => removeFromCart(product.id)}>
                              <Minus />
                            </button>
                            <span>{cartItems[product.id]}</span>
                            <button onClick={() => addToCart(product.id)}>
                              <Plus />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="cart-summary-section">
            <h4>Cart Summary</h4>
            <hr />
            <div className="cart-subtotal">
              <h5>Subtotal</h5>
              <h5>Ksh {totalAmount}</h5>
            </div>
            <p>Delivery not included yet</p>
            <button
              className="--btn btn-checkout"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </section>
      ) : (
        <div className="cart-container">
          <div className="empty-cart">
            <h5>Your cart is empty</h5>
            <button onClick={handleContinueShoppin} className="btn-gradient">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
