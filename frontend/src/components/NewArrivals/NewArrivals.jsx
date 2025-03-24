import React from 'react'
import './newarrivals.css'

const NewArrivals = () => {
  return (
    <section className='featured-section'>
        <h4 className='section-title'>Featured</h4>
        <div className='section-header'>
          <h3 >New Arrivals</h3>
        </div>
        
        <div className="featured-grid-container">
          <div className="feature-category-card">
            <h3>PlayStation</h3>
            <p>Back ad white content of the For</p>
          </div>
          <div className="women-collections">
            <h3>Women's Collection</h3>
            <p>Featured women collections that</p>
            <a href="#" className="btn">Shop Now</a>
          </div>
          <div className="sales-banner">
            <h3>Shopping Out On sale</h3>
            <p>Speakers &amp; Audion Equipment</p>
            <a href="#" className="btn">Explore Deals</a>
          </div>
        </div>
    </section>
  )
}

export default NewArrivals