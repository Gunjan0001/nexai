import React from "react";
import ai from "../assets/images/png/ai.png";
const About = () => {
  return (
    <section className="mx-2">
      <div className="container container_modified my-5 py-4  ai_bg">
        <div className="row align-items-center justify-content-center mt-5 py-lg-5  px-lg-5 px-2">
          <div className="col-lg-7  text-center text-md-start ps-md-5">
            <p className=" ff_recharge fw_bold fs_lg text_sky mb-0">
              What is NexAi?
            </p>
            <div className=" pe-md-1 ">
              <p className="ff_poppins fw_regular fs_xs text_white mt-3 mb-0">
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p className="ff_poppins fw_regular fs_xs text_white  mt-1 mb-0">
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
            </div>
            <div className="mt-2 c_pointer">
              <button className="d-none transition_03 d-lg-flex ff_recharge fw_bold fs_sm mt-4  d-inline-block text_black sign_btn ">
                Learn More
              </button>
            </div>
          </div>
          <div className=" pe-md-5 col-8  col-sm-7  col-lg-5 ">
            <img className="w-100" src={ai} alt="artborad" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
