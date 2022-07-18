import { React } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//=========== Pictures=======
import reklama1 from '../../assets/images/reklama1.jpg';
import reklama2 from '../../assets/images/reklama2.jpg';
import reklama3 from '../../assets/images/reklama3.jpg';
import reklama4 from '../../assets/images/reklama4.png';
import reklama5 from '../../assets/images/reklama5.jpg';
import reklama6 from '../../assets/images/reklama6.jpg';
import reklama7 from '../../assets/images/reklama7.jpg';
import reklama8 from '../../assets/images/reklama8.jpg';
import reklama9 from '../../assets/images/reklama9.jpg';

import mont1 from '../../assets/images/mont1.png';
import mont2 from '../../assets/images/mont2.jpg';
import mont3 from '../../assets/images/mont3.png';
import mont4 from '../../assets/images/mont4.jpg';

import shirt from '../../assets/images/shirt.jpg';
import shirt1 from '../../assets/images/shirt1.jpg';
import shirt2 from '../../assets/images/shirt2.jpg';
import shirt3 from '../../assets/images/shirt3.jpg';
import shirt4 from '../../assets/images/shirt4.jpg';
import shirt5 from '../../assets/images/shirt5.jpg';

import './index.scss';
const BodyPage = () => {


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
      <div className='container-wrapper'>

        <div className="container-left">
          <Link className='body-reklama--link'>
            <img className='body-reklama--img' src={reklama9} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama2} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama3} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama8} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama5} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama6} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama7} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama4} alt="" />
          </Link>
          <Link className='body-reklama'>
            <img className='body-reklama--img' src={reklama1} alt="" />
          </Link>
        </div>

        <div className="container-right">

          <div className='slider__inner'>
            <div className='slider__wrapper'>
              <Slider {...settings}>
                <Link className='slider__link'>
                  <img className='slider__img' src={mont2} width={340} height={333} alt="" />
                </Link>
                <Link className='slider__link'>
                  <img className='slider__img' src={mont1} width={340} height={333} alt="" />
                </Link>
                <Link className='slider__link'>
                  <img className='slider__img' src={shirt5} width={340} height={333} alt="" />
                </Link>
                <Link className='slider__link'>
                  <img className='slider__img' src={mont3} width={340} height={333} alt="" />
                </Link>
                <Link className='slider__link'>
                  <img className='slider__img' src={mont4} width={340} height={333} alt="" />
                </Link>
              </Slider>
            </div>
          </div>

          <div className='slider__inner'>
            <Slider {...settings}>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt5} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt3} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt4} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont3} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont4} width={340} height={333} alt="" />
              </Link>
            </Slider>
          </div>

          <div className='slider__inner'>
            <Slider {...settings}>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt1} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont3} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt2} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont4} width={340} height={333} alt="" />
              </Link>
            </Slider>
          </div>

          <div className='slider__inner'>
            <Slider {...settings}>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt1} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont3} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt2} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont4} width={340} height={333} alt="" />
              </Link>
            </Slider>
          </div>

          <div className='slider__inner'>
            <Slider {...settings}>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt1} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont3} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={shirt2} width={340} height={333} alt="" />
              </Link>
              <Link className='slider__link'>
                <img className='slider__img' src={mont4} width={340} height={333} alt="" />
              </Link>
            </Slider>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default BodyPage;