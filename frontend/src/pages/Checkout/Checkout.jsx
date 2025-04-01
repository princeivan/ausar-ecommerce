import React, { useContext, useEffect, useState } from "react";
import "./checkout.css";
import MpesaLog from "../../assets/mpesa-logo.png";
import creditCard from "../../assets/mc_symbol.png";
import Paypal from "../../assets/paypal.png";
import { GlobalContext } from "../../context/index";
import { MdOutlineDeleteSweep, MdEdit, MdCheckCircle } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Checkout = () => {
  const {
    cartItems,
    getTotalCartAmount,
    getCartItemCount,
    products,
    removeFromCart,
    updateCartItemCount,
    addToCart,
  } = useContext(GlobalContext);

  const [showDelivery, setShowDelivery] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    street: "",
    town: "",
    landmark: "",
    phone: "",
    email: "",
  });
  const allFieldsFilled = Object.values(deliveryInfo).every(
    (field) => field.trim() !== ""
  );

  useEffect(() => {
    if (paymentCompleted) {
      document
        .querySelector(`.payment-option.selected`)
        .classList.add("completed");
    }
  }, [paymentCompleted]);

  const handleInputChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
    //simulate redirecting to payment
    setTimeout(() => {
      alert(`Redirecting to complete payment for ${method}...`);
      setTimeout(() => setPaymentCompleted(true), 2000);
    }, 1000);
  };

  return (
    <section className="checkout">
      <p>Home / Shop / View Cart / Checkout</p>
      <div className="checkout-info">
        {/* Delivery Information */}
        <div className="checkout-section">
          <div
            className="section-header"
            onClick={() => setShowDelivery(!showDelivery)}
          >
            <h4>Delivery Information</h4>
            <button className="edit-button">
              {showDelivery ? <FaChevronUp /> : <MdEdit />} Edit
            </button>
            {allFieldsFilled && <MdCheckCircle className="green-check" />}
          </div>
          {showDelivery && (
            <div className="checkout-delivery-information">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={deliveryInfo.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
              />
              <label>Street Address</label>
              <input
                type="text"
                name="street"
                value={deliveryInfo.street}
                onChange={handleInputChange}
                placeholder="Street Address..."
              />
              <label>Town/City</label>
              <input
                type="text"
                name="town"
                value={deliveryInfo.town}
                onChange={handleInputChange}
                placeholder="Town"
              />
              <label>Landmark Near You</label>
              <input
                type="text"
                name="landmark"
                value={deliveryInfo.landmark}
                onChange={handleInputChange}
                placeholder="Landmark"
              />
              <label>Phone Number</label>
              <input
                type="number"
                name="phone"
                value={deliveryInfo.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={deliveryInfo.email}
                onChange={handleInputChange}
                placeholder="Email Address"
              />
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="checkout-items-container">
            {products.map((e) =>
              cartItems[e.id] > 0 ? (
                <div className="checkout-item" key={e.id}>
                  <img
                    src={e.image}
                    alt={e.title}
                    className="checkout-item-image"
                  />
                  <div className="item-details">
                    <p>{e.title}</p>
                    <div className="cart-quantity">
                      <button onClick={() => removeFromCart(e.id)}>-</button>
                      <input
                        type="number"
                        value={getCartItemCount(e.id)}
                        onChange={(event) =>
                          updateCartItemCount(Number(event.target.value), e.id)
                        }
                      />
                      <button onClick={() => addToCart(e.id)}>+</button>
                    </div>
                  </div>
                  <p className="price">Ksh {e.new_price * cartItems[e.id]}</p>
                  <button
                    onClick={() => removeFromCart(e.id)}
                    className="remove-item"
                  >
                    <MdOutlineDeleteSweep />
                  </button>
                </div>
              ) : null
            )}
          </div>

          <div className="summary-totals">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>Ksh {getTotalCartAmount()}</span>
            </div>
            <div className="summary-item">
              <span>Shipping Fee</span>
              <span>Ksh 290</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>Ksh {getTotalCartAmount() + 290}</span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="checkout-section">
          <h4>Select Payment Method</h4>
          <div className="payment-methods">
            {[
              { img: MpesaLog, name: "Mpesa" },
              { img: creditCard, name: "Visa/MasterCard" },
              { img: Paypal, name: "Paypal" },
            ].map((method) => (
              <div
                key={method.name}
                className={`payment-option ${
                  selectedPayment === method.name ? "selected" : ""
                }`}
                onClick={() => handlePaymentSelection(method.name)}
              >
                <img src={method.img} alt={method.name} />
                <p>{method.name}</p>
              </div>
            ))}
          </div>
          <button
            className="place-order-button"
            disabled={!(allFieldsFilled && paymentCompleted)}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
