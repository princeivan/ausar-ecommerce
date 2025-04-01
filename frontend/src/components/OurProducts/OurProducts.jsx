import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import Item from "../item/Item";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ourproducts.css";

const OurProducts = () => {
  const { products, nextPage, prevPage, getProducts } =
    useContext(GlobalContext);
  return (
    <section className="explore-products">
      <h4 className="section-title">Our Products</h4>
      <div>
        <div className="section-header">
          <div>
            <h3>Explore Our Products</h3>
          </div>
          <div className="next-arrows">
            {prevPage && (
              <FaArrowLeft
                size={20}
                className="arrow"
                onClick={() => getProducts(prevPage)}
              />
            )}
            {nextPage && (
              <FaArrowRight
                size={20}
                className="arrow"
                onClick={() => getProducts(nextPage)}
              />
            )}
          </div>
        </div>
        <div className="product-grid">
          {products.slice(0, 12).map((product) => (
            <Item
              key={product.id}
              id={product.id}
              name={product.title}
              url={product.image}
              price={product.price}
            />
          ))}
        </div>

        <button className="view-all">View All</button>
      </div>
    </section>
  );
};

export default OurProducts;
