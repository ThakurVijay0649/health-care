import swiperimage1 from '../images/swiperimage1.png';
import swiperimage2 from '../images/swiperimage2.png';
import swiperimage3 from '../images/swiperimage3.png';
import swiperimage4 from '../images/swiperimage4.png';
import swiperimage5 from '../images/swiperimage5.png';
import "../Styles/ImageSwiper.scss";
const ImageSwiper = () => {
    return (
        <div className="image-swiper">
            <img src={swiperimage1} alt="" />
            <img src={swiperimage2} alt="" />
            <img src={swiperimage3} alt="" />
            <img src={swiperimage4} alt="" />
            <img src={swiperimage5} alt="" />
        </div>
    );
};

export default ImageSwiper