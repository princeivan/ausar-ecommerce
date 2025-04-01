import React from "react";
import "./footer.css";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram, FaPhoneVolume } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="footer-logo-section">
          <h4>Ausar Creative</h4>
          <p>Subscribe</p>
          <p>Get 10% Off your first order</p>
          <input
            type="text"
            placeholder="Enter your email..."
            className="footer-section-input"
          />
        </div>
        <div className="support-section">
          <h4>Support</h4>
          <p>
            <CiLocationOn size={20} className="icon" /> Ronald ngala, opposite
            RGN
          </p>
          <p>
            <MdMarkEmailRead size={20} className="icon" /> info@ausar.co.ke
          </p>
          <p>
            <FaPhoneVolume size={20} className="icon" />
            +254713456890
          </p>
        </div>

        <div className="footer-quicklink-section">
          <h4>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-icons">
          <FaFacebookSquare size={30} className="fa-facebook" />
          <FaSquareInstagram size={30} className="fa-instagram" />
          <FaWhatsapp size={30} className="fa-whatsapp" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
