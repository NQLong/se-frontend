import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    console.log(slider1)
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              <div key={1}>
                <img src="https://nhahangkimgiadalat.com/images/slide/feb216bdd35afa73086fbab2b89b059c.jpg"></img>
              </div>
              <div key={2}>
                <img src="https://nhahangkimgiadalat.com/images/slide/ab8f3eb269295b7258d49f60baf30e73.jpg"></img>
              </div>
              <div key={3}>
                <img src="https://nhahangkimgiadalat.com/images/slide/4ba599aa4e18f1e11ed4202bc09b00c6.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://nhahangkimgiadalat.com/images/slide/feb216bdd35afa73086fbab2b89b059c.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://nhahangkimgiadalat.com/images/slide/4ba599aa4e18f1e11ed4202bc09b00c6.jpg"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
              BỮA CƠM GIA ĐÌNH VIỆT  <br></br>  Ăn đi chờ chi
              </div>
              <div>
               GÀ TRE NƯỚNG  <br></br>  Giảm đến 15%
              </div>
              <div>
              BÒ KUBE SIÊU CẤP VIP PRO  <br></br>  Khuyến mãi với giá siêu ưu đãi 1.999.999.999$
              </div>
              <div>
              BỮA CƠM GIA ĐÌNH VIỆT  <br></br>  Ăn đi chờ chi
              </div>
              <div>
              BÒ KUBE SIÊU CẤP VIP PRO  <br></br>  Khuyến mãi với giá siêu ưu đãi 1.999.999.999$
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://nhahangkimgiadalat.com/images/slide/4ba599aa4e18f1e11ed4202bc09b00c6.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://nhahangkimgiadalat.com/images/slide/ab8f3eb269295b7258d49f60baf30e73.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://nhahangkimgiadalat.com/images/slide/feb216bdd35afa73086fbab2b89b059c.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
