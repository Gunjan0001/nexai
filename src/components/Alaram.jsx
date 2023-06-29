import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AlaramCrads } from "./Helper";
import leftcircle from "../assets/images/png/leftcircle.png";
import homeshadow from "../assets/images/png/home_shadow.png";
const Alaram = () => {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 5000,
    cssEase: "linear",
    rtl: true,
    autoplaySpeed: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 0.88,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div class="py-5 position-relative z_index2 pt-lg-5 mt-lg-5" id="brand">
        <img
          className="position-absolute round_image d-none d-lg-block"
          src={leftcircle}
          alt="circle"
        />{" "}
        <img
          className="position-absolute z_index1 d-none d-lg-block alaram_shadow"
          src={homeshadow}
          alt="shadow"
        />
        <div class="  pt-xl-3">
          <div class="text-center mx-3 mx-sm-5 px-md-5 pb-5 mb-5">
            <p className="  ff_recharge fw_bold fs_lg text_sky mb-0">
              NexAi does all this. And more.
              <p className=" ff_poppins fw_regular fs_sm mb-0 text_white max_w_1024 mx-auto">
                Nexai is an advanced home assistant that will revolutionize the
                way we interact with our smart devices at home. Powered by
                sophisticated artificial intelligence, it leverages blockchain
                technology to offer a secure and efficient user experience.
              </p>
            </p>
          </div>
          <Slider {...settings}>
            {AlaramCrads.map((value, index) => {
              return (
                <>
                  <div key={index} className="card_alarm">
                    <p className="ff_recharge fw_bold fs_md text-center text-white mb-0 ">
                      {value.para}
                    </p>
                  </div>
                </>
              );
            })}
          </Slider>
          <div className="mt-4 pt-2">
            <Slider {...settings}>
              {AlaramCrads.map((value, index) => {
                return (
                  <>
                    <div key={index} className="card_alarm">
                      <p className="ff_recharge fw_bold fs_md text-center text-white mb-0 ">
                        {value.para}
                      </p>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
          <div className="mt-4 pt-2">
            <Slider {...settings}>
              {AlaramCrads.map((value, index) => {
                return (
                  <>
                    <div key={index} className="card_alarm">
                      <p className="ff_recharge fw_bold fs_md text-center text-white mb-0 ">
                        {value.para}
                      </p>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alaram;
