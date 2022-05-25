import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tilt from 'react-parallax-tilt';
const Hero = () => {
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        pauseOnHover: false

    };
    return (
        <div className="  ">


            <Slider {...settings} >
                <img className="h-[calc(50vh-48px)]  lg:h-[calc(100vh-48px)] w-screen " src="https://i.ibb.co/s6XvjYy/slide1.png" alt="slide1" border="0" />
                <img className="h-[calc(50vh-48px)]  lg:h-[calc(100vh-48px)] w-screen " src="https://i.ibb.co/t3nJjPJ/slide2.png" alt="slide2" border="0" />
                <img className="h-[calc(50vh-48px)]  lg:h-[calc(100vh-48px)] w-screen " src="https://i.ibb.co/GF9Xz77/slide3.png" alt="slide3" border="0" />


            </Slider>
        </div>
    );
}

export default Hero;
