import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import api from "../../../api";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [id]);

  async function getProduct() {
    api
      .get(`api/products/${id}/`)
      .then((res) => res.data)
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <section>
      <ProductDisplay
        id={product.id}
        name={product.title}
        url={product.image}
        price={product.new_price}
        description={product.description}
      />
    </section>
  );
};

export default ProductDetail;
