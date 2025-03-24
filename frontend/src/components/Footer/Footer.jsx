import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-logo-section'>
        <h4>Ausar Creative</h4>
        <p>Subscribe</p>
        <p>Get 10% Off your first order</p>
        <input type="text" placeholder='Enter your email...'/>
      </div>
      <div>
        <h4>Support</h4>
        <p>Ronald ngala, opposite RGN</p>
        <p>info@ausar.co.ke</p>
        <p>+254713456890</p>
      </div>
      <div>
        <h4>Account</h4>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className='footer-quicklink-section'>
        <h4>Quick Link</h4>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      </div>
  )
}

export default Footer