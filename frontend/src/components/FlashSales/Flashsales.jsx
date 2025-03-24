import React, { useContext } from 'react'
import './flashsales.css'
import {GlobalContext} from '../../context/index'
import Item from '../item/Item'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Flashsales = () => {
  const {products} = useContext(GlobalContext)
  return (
    <section className='flash-sales'>
      <div>
        <h4 className='section-title'>Today's</h4>
      </div>
        <div className='section-header'>
          <div className='section-header-left'>
            <h3>Flash Sales</h3>
            <h3 className='timer'>⏳ 03:23:19:56</h3>
          </div>
            
             <div className='next-arrows'>
                <FaArrowLeft size={20} className='arrow'/>
                <FaArrowRight size={20} className='arrow'/>
             </div> 
        </div>
        <div className='product-grid'>
            {
              products.slice(0,4).map((product) =>(
                  <Item
                   key={product.id}
                   id={product.id}
                   name={product.title}
                   url ={product.image}
                   price={product.price}
                  />
              ))
            }
        </div>
        <div>
            <button className='view-all'>View All Products</button>
        </div>
    </section>
  )
}

export default Flashsales