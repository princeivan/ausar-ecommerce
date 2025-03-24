import React from 'react'
import './browsecategory.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const BrowseCategory = () => {
  return (
    <section className='category-section'>
        <h4 className='section-title'>Categories</h4>
        <div className='section-header'> 
            <div><h3>Browse By Category</h3></div>
             <div className='next-arrows'>
                <FaArrowLeft size={20} className='arrow'/>
                <FaArrowRight size={20} className='arrow'/>
              </div> 
        </div>
        <div>
            <ul className='category-grid'>
                <li className='category'>📱 Phones</li>
                <li className='category'>💻 Computers</li>
                <li className='category'>SmartWatch</li>
                <li className='category'>📷 Camera</li>
                <li className='category'>🎧 HeadPhones</li>
                <li className='category'>🕹Gaming</li>
            </ul>
        </div>
    </section>
  )
}

export default BrowseCategory