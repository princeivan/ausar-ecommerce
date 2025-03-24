import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactus.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const notify = () => {
    toast.success("🎉 Message Sent!", {
      className: "toast-custom",
      autoClose: 3000,
      position: "top-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <h3 className="contact-title">Phone:</h3>
              <p className="contact-info-text">+12234567890</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <h3 className="contact-title">Email:</h3>
              <p className="contact-info-text">info@ausarcreative.com</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <h3 className="contact-title">Address:</h3>
              <p className="contact-info-text">
                123 Creative Street, Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="form-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" onClick={notify}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
