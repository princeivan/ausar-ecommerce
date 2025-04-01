import React, { useContext } from "react";
import "./flashsales.css";
import { GlobalContext } from "../../context/index";
import Item from "../item/Item";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCarousel from "../Carousel/Carousel";

const Flashsales = () => {
  const { flashSales } = useContext(GlobalContext);

  const product = flashSales.map((product) => (
    <Item
      key={product.id}
      id={product.id}
      name={product.title}
      url={product.image}
      price={product.price}
    />
  ));
  return (
    <section className="flash-sales">
      <div>
        <h4 className="section-title">Today's</h4>
      </div>
      <div className="section-header">
        <div className="section-header-left">
          <h3>Flash Sales</h3>
          <h3 className="timer">⏳ 03:23:19:56</h3>
        </div>
      </div>
      <div className="product-grid"></div>
      <ProductCarousel product={product} />
      <div>
        <button className="view-all">View All Products</button>
      </div>
    </section>
  );
};

export default Flashsales;
