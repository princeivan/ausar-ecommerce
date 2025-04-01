import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";

const ProductCarousel = ({ product }) => {
  return (
    <Carousel
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      customTransition="all 500ms ease"
      transitionDuration={1000}
    >
      {product}
    </Carousel>
  );
};

export default ProductCarousel;
