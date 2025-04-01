import React, { useContext, useState } from "react";
import Iphone from "../../assets/iphone.png";
import "./Hero.css";
import ProductCarousel from "../../components/Carousel/Carousel";
import Slider from "../Slider/Slider";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { category, setCategory, getProducts } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleCategoryClick = (catname) => {
    getProducts("api/products/", catname);
    navigate(`shop/?query=${catname}`);
  };
  return (
    <div className="hero-section">
      <div className="sidebar">
        {category.map((cat) => (
          <ul key={cat.id}>
            <li onClick={() => handleCategoryClick(cat.name)}>{cat.name}</li>
          </ul>
        ))}
      </div>
      <div>
        {/* <img src={Iphone} alt=""  className='couresel'/> */}
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
