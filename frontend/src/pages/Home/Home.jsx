import React from 'react'
import Hero from '../../components/Hero/Hero'
import Flashsales from '../../components/FlashSales/Flashsales'
import OurProducts from '../../components/OurProducts/OurProducts'
import BestSelling from '../../components/BestSelling/BestSelling'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import BrowseCategory from '../../components/Browsecategory/BrowseCategory'
import Whyus from '../../components/Whyus/Whyus'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Flashsales/>
      <BrowseCategory/>
      <BestSelling/>
      <OurProducts/>
      <NewArrivals/>
      <Whyus/>

    </div>
  )
}

export default Home