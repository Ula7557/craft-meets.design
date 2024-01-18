import Slider from "react-slick";
import './carouselcard.scss'
const Carouselcard = ({description, image, extra}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="content-block-one">
            <div className="left-side" >
                <div className='carosel-tems'>
                    <Slider {...settings}>
                        <div className='images'>
                            <img src={image} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="right-side" >
                <div className="inner-block">
                    <h2>{extra}</h2>
                    <div className="p">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carouselcard