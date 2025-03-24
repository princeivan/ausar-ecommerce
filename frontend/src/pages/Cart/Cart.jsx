import React, { useContext } from "react";
import "./cart.css";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context";

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

  return (
    <section className="cart">
      <div className="cart-products-section">
        <h4>Cart</h4>
        <hr />

        {products.map((e) => {
          if (cartItems[e.id] > 0) {
            const productPrice = e.price || 0;
            const productTotal = productPrice * cartItems[e.id];

            return (
              <>
                <div className="cart-product-details" key={e.id}>
                  <div>
                    <img src={e.image} alt="" className="cart-image" />
                  </div>
                  <div>
                    <h4>{e.title}</h4>
                    <p>In stock</p>
                  </div>
                  <div className="cart-price">
                    <h4>Ksh {e.price}</h4>
                    <div className="cart-old-prices">
                      <p className="old-prices">Ksh {e.price}</p>
                      <p className="discount">-49%</p>
                    </div>
                  </div>
                </div>

                <div className="cart-icons">
                  <div
                    className="cart-icons-delete remove-icon"
                    onClick={() => removeFromCart(e.id)}
                  >
                    <MdDeleteOutline size={30} />
                    <h5> Remove</h5>
                  </div>
                  <div className="cart-icons-edit">
                    <button onClick={() => removeFromCart(e.id)}>-</button>
                    <input
                      type="number"
                      className="getcartitems-input"
                      value={getCartItemCount(e.id)}
                      onChange={(e) =>
                        updateCartItemCount(Number(e.target.value), e.id)
                      }
                    />
                    <button onClick={() => addToCart(e.id)}>+</button>
                  </div>
                </div>
                <hr />
              </>
            );
          }
        })}
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
  );
};

export default Cart;
