import React from 'react'
import Iphone from '../../assets/iphone.png'
import './Hero.css'
import ProductCarousel from '../../components/Carousel/Carousel'
import Slider from '../Slider/Slider'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='sidebar'>
          <ul>
            <li>Women Fashion</li>
            <li>Men Fashion</li>
            <li>Electronics</li>
            <li>Home lifestyle</li>
            <li>Medicine</li>
            <li>Sports & outdoor</li>
            <li>Baby's and Toys</li>
            <li>Health & Beauty</li>
          </ul>
           
        </div>
        <div>
            {/* <img src={Iphone} alt=""  className='couresel'/> */}
            <Slider/>
        </div>
    </div>
  )
}

export default Hero