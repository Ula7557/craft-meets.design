import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import './carousel.scss'

export const AmazonSlider = ({ images }) => {
  return <Carousel 
            images={images} 
            style={{width: "100%" }}
            hasLeftButton={false}
            hasRightButton={false}
            hasSizeButton={false}
        />;
};
