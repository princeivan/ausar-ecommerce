import React, { useContext } from "react";
import "./checkout.css";
import MpesaLog from "../../assets/mpesa-logo.png";
import creditCard from "../../assets/mc_symbol.png";
import Airtel from "../../assets/airtel.png";
import Bank from "../../assets/bank.png";
import Paypal from "../../assets/paypal.png";
import { GlobalContext } from "../../context/index";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Checkout = () => {
  const {
    cartItems,
    getTotalCartAmount,
    getTotalCartItems,
    products,
    getCartItemCount,
    updateCartItemCount,
    removeFromCart,
    addToCart,
    clearCart,
  } = useContext(GlobalContext);
  return (
    <section className="checkout">
      <p> Home / Shop / View cart / checkout</p>
      <div className="checkout-info">
        <div className="checkout-delivery-information">
          <h4>Delivery Information</h4>
          <label>Full Name</label>
          <input type="text" placeholder="FullName" />
          <label>Street Address</label>
          <input type="text" placeholder="Street Address..." />
          <label>Town/City</label>
          <input type="text" placeholder="Town" />
          <label>Landmarck Near you</label>
          <input type="text" placeholder="Landmark near your" />
          <label>Phone Number</label>
          <input type="number" placeholder="Phone Number" />
          <label>Email</label>
          <input type="email" placeholder="Email Address" />
        </div>

        <div className="checkout-right-section">
          <div className="--flex-between">
            <h3>Order Summary</h3>
            <h3>Cart({getCartItemCount()})</h3>
          </div>
          <hr />

          {products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <>
                  <div className="checkout-items" key={e.id}>
                    <img
                      src={e.image}
                      alt={e.title}
                      className="checkout-item-image"
                    />
                    <p>{e.title}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => removeFromCart(e.id)}>-</button>
                      <input
                        type="number"
                        value={getCartItemCount(e.id)}
                        onChange={(e) =>
                          updateCartItemCount(Number(e.target.value), e.id)
                        }
                      />
                      <button onClick={() => addToCart(e.id)}>+</button>
                    </div>
                    <p>Ksh {e.price * cartItems[e.id]}</p>
                    <button
                      onClick={() => removeFromCart(e.id)}
                      className="cart-item-remove"
                    >
                      Remove <MdOutlineDeleteSweep />
                    </button>
                  </div>
                </>
              );
            }
          })}

          <div className="checkout-subtotal">
            <h5>Subtotal</h5>
            <h5>Ksh {getTotalCartAmount()}</h5>
          </div>
          <hr />
          <div className="checkout-shipping">
            <h5>Shipping Fee</h5>
            <h5>Ksh 290</h5>
          </div>
          <hr />
          <div className="checkout-total">
            <h5>Total</h5>
            <h5>Ksh {getTotalCartAmount()}</h5>
          </div>
          <hr />
          <div className="payment">
            <h5>Select your method of Payment</h5>
            <ul className="payment-method">
              <li>
                <img src={MpesaLog} alt="Mpesa" className="payment-option" />
                Mpesa
              </li>
              <li>
                <img
                  src={creditCard}
                  alt="Credit Card"
                  className="payment-option"
                />
                Visa/MasterCard
              </li>
              <li>
                <img src={Paypal} alt="Paypal" className="payment-option" />
                Paypal
              </li>
            </ul>
          </div>
          <button className="place-order-button">Place Order</button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
