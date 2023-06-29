import React from "react";
import Slider from "react-slick";
import { BlockCards } from "./Helper";
import technologycirle from "../assets/images/png/technologycircle.png";
import homeshadow from "../assets/images/png/home_shadow.png";
import shadows from "../assets/images/png/shadows.png";
const Technology = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 4500,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 mt-md-5  position-relative">
        <div className=" pb-md-5 mt-md-5">
          <img
            className="position-absolute z_index1 d-none d-lg-block shadow_position1"
            src={shadows}
            alt="shadow"
          />
          <img
            className="position-absolute technology_circle"
            src={technologycirle}
            alt="circle"
          />
          <img
            className="position-absolute z_index1 d-none d-lg-block home_shadow1"
            src={homeshadow}
            alt="shadow"
          />
          <div className="container container_modified">
            <h2 className="text_sky ff_recharge fw_bold fs_lg text-center ">
              Blockchain & AI technology
            </h2>
            <p className=" text-center fs_xs text_white mx-auto max_w_1024 mb-sm-5 ff_poppins pb-4  fw_regular">
              Nexai is an advanced home assistant that will revolutionize the
              way we interact with our smart devices at home. Powered by
              sophisticated artificial intelligence, it leverages blockchain
              technology to offer a secure and efficient user experience.
            </p>
            <p className="ff_recharge fw_bold fs_base text-center text-white max_w_684  mx-auto">
              By building the software on blockchain, Nexai provides the
              following advantages
            </p>
          </div>
          <div className="mt-5 pt-4 ms-sm-5">
            <Slider {...settings}>
              {BlockCards.map((e, index) => {
                return (
                  <div className="px-3 block_cards  py-5 ">
                    <div
                      className={`d-flex flex-column align-items-center blockchain justify-content-center text-center ${
                        index === 1 ? "mt-5 pt-5" : ""
                      } `}
                    >
                      <p className="ff_recharge fw_bold fs_base text-white small_circle">
                        {e.para1}
                      </p>
                      <p className="ff_recharge fw_bold fs_base text-white">
                        {e.para2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
