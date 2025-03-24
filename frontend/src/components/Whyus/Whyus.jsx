import React from 'react'
import { FaMoneyBillWave, FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import './whyus.css'
const Whyus = () => {
  return (
    <section className='whyus-section'>
        <h3 className='section-title'>Why Us</h3>
        <div className='whyus-headers'>
            <div className='whyus-content'>
                <FaTruckFast size={30} className='why-icons'/>
               <h4>FREE AND FAST DELIVERY</h4>
               <p>Free delivery for orders above 2500 within Nairobi</p> 
            </div>
            <div className='whyus-content'>
                <TfiHeadphoneAlt size={30} className='why-icons'/>
                <h4>24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className='whyus-content'>
              <IoShieldCheckmarkSharp size={30} className='why-icons'/>
                <h4>MONEY BACK QUARANTEE</h4>
                <p>we return money within 3 days</p>
            </div>
            
        </div>
    </section>
  )
}

export default Whyus