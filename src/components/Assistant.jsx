import React from "react";
import artboard from "../assets/images/webp/artboard.webp";
import shadow from "../assets/images/png/shadow.png";
import homeshadow from "../assets/images/png/home_shadow.png";
import overlay from "../assets/images/png/overlay.png";
const Assistant = () => {
  return (
    <>
      <section className="position-relative z_index5 ">
        <img className="position-absolute w-100 overlay d-none d-xl-block" src={overlay} alt="overlay" />
        <img
          className="position-absolute z_index1 d-none d-lg-block shadow_position"
          src={shadow}
          alt="shadow"
        />
        <img
          className="position-absolute z_index1 d-none d-lg-block home_shadow"
          src={homeshadow}
          alt="shadow"
        />
        <div className="container container_modified mt-3 mt-md-5 py-md-5">
          <div className="row align-items-center justify-content-center">
            <div className="   col-sm-10 col-md-5 ">
              <img className="w-100" src={artboard} alt="artborad" />{" "}
            </div>
            <div className="col-md-7 ps-xl-5 pt-4 pt-md-0 text-center text-md-start">
              <p className=" ps-xl-4 ff_recharge fw_bold fs_lg text_sky mb-0">
                Ai-Powered Home Assistant
              </p>
              <div className="pe-xl-4 ps-xl-4 ">
                <p className="ff_poppins fw_regular fs_sm text_white mt-3 mb-0">
                  Nexai is an advanced AI-powered home assistant that brings the
                  future to your fingertips. With its ability to engage in
                  natural, fluent conversations in over 15 languages,
                </p>
                <p className="ff_poppins fw_regular fs_sm text_white  mt-1 mb-0">
                  Nexai offers an incredibly futuristic experience. It can take
                  the initiative to ask about your day, schedule meetings,
                  provide timely reminders
                </p>
                <p className="ff_poppins fw_regular fs_sm text_white mt-1  mb-4 ">
                  assist with cooking by suggesting ingredients, track your
                  fitness and nutrition goals, and even handle bill payments.
                </p>
              </div>
              <div className="mt-2 ps-xl-4 c_pointer">
                <button className="d-none transition_03 d-lg-flex ff_recharge fw_bold fs_sm mt-4  d-inline-block text_black sign_btn ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Assistant;
