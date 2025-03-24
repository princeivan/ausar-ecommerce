import React, { useContext } from 'react'
import {GlobalContext} from '../../context/index'
import Item from '../../components/item/Item'
import './shop.css'
const Shop = () => {
    const {products} = useContext(GlobalContext)
  return (
    <section className='shop-section'>
        <div className='sidebar-section'>
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
        <div className='products-section'>
            {
            products.map((item)=>(
              <Item
               key={item.id}
               id={item.id}
               name={item.title}
               url ={item.image}
               price={item.price}
               rating={item.rating}
              />  
            ))
            }
        </div>
    </section>
  )
}

export default Shop