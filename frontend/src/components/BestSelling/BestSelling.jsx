import React, { useContext } from 'react'
import {GlobalContext} from '../../context/index'
import Item from '../item/Item'
import './bestselling.css'

const BestSelling = () => {
  const {products} = useContext(GlobalContext)
  return (
    <section className='best-selling'>
        <h4 className='section-title'>This Month</h4>
        <div className='section-header'>
          <div>
            <h3>Best Selling Products</h3>
          </div>
            <div>
              <button className='view-all'>View All</button>
            </div>
            
        </div>
        <div className="product-grid">
          {
            products.slice(8,12).map((product)=>( 
            <Item
              key={product.id}
              id={product.id}
              name={product.title}
              url={product.image}
              price={product.price}
              />)
             
            )
          }
        </div>
    </section>
  )
}

export default BestSelling