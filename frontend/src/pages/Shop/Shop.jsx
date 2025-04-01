import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/index";
import Item from "../../components/item/Item";
import "./shop.css";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const {
    products,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
    getProducts,
    category,
  } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  //Handle category click
  const handleCategoryClick = (catname) => {
    getProducts(`api/products/`, catname);
    scrollToTop();
  };

  const handePagination = (pageUrl) => {
    getProducts(pageUrl);
    scrollToTop();
  };
  console.log(selectedCategory);

  return (
    <section className="shop-container">
      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>/{" "}
        <span>{selectedCategory || searchQuery}</span>
      </div>
      <div className="shop-section">
        <div className="sidebar-section">
          <ul>
            <li
              onClick={() => {
                handleCategoryClick("");
                setSelectedCategory("All Products");
              }}
            >
              All Products
            </li>
            {category.map((cat) => (
              <li
                key={cat.id}
                onClick={() => {
                  handleCategoryClick(cat.name);
                  setSelectedCategory(cat.name);
                }}
                className={
                  selectedCategory === cat.name ? "active-category" : ""
                }
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="products-section">
          {products.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.title}
              url={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="pagination-buttons">
        {prevPage && (
          <button onClick={() => handePagination(prevPage)}>Previous</button>
        )}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {nextPage && (
          <button onClick={() => handePagination(nextPage)}>Next</button>
        )}
      </div>
    </section>
  );
};

export default Shop;
