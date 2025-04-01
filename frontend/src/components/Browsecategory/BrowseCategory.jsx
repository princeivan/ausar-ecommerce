import React, { useContext } from "react";
import "./browsecategory.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCarousel from "../Carousel/Carousel";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const BrowseCategory = () => {
  const { category, setCategory, getProducts } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleCategoryClick = (catname) => {
    getProducts("api/products/", catname);
    navigate(`/shop/?query=${catname}`);
  };

  return (
    <section className="category-section">
      <h4 className="section-title">Categories</h4>
      <div className="section-header">
        <div>
          <h3>Browse By Category</h3>
        </div>
        <div className="next-arrows">
          <FaArrowLeft size={20} className="arrow" />
          <FaArrowRight size={20} className="arrow" />
        </div>
      </div>
      <div className="category-grid">
        {category.map((cat) => (
          <ul key={cat.id}>
            <li
              className="category"
              onClick={() => handleCategoryClick(cat.name)}
            >
              {cat.name}
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategory;
