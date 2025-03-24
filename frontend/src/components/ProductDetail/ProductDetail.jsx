import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ProductDisplay from './ProductDisplay';

const ProductDetail = () => {
    const {id}  = useParams() 
    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProduct()
    },[id])

    async function getProduct(){
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}/`)
            const data = await response.json();
            console.log(data);
            setProduct(data)
         
        } catch (error) {
            console.log('error fetching data');   
        }
    }
  return (
    <section >
       <ProductDisplay
        name={product.title}
        url={product.image}
        price={product.price}
        description={product.description}
       /> 
    </section>
  )
}

export default ProductDetail