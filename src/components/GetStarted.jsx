import React from "react";
import homeshadow from "../assets/images/png/home_shadow.png";
import shadows from "../assets/images/png/shadows.png";
import technologycirle from "../assets/images/png/technologycircle.png";
const GetStarted = () => {
  return (
    <>
      <section className="position-relative">
        <img
          className="position-absolute z_index1 d-none d-lg-block shadow_footer"
          src={shadows}
          alt="shadow"
        />
        <img
          className="position-absolute z_index1 d-none d-lg-block home_shadow1"
          src={homeshadow}
          alt="shadow"
        />
        <img
          className="position-absolute technology_circle"
          src={technologycirle}
          alt="circle"
        />
        <div className="container  container_modified pt-xl-5 mt-xl-5">
          <div className="d-sm-flex align-items-center py-md-5 my-xl-5 justify-content-between text-center text-sm-start">
            <h2 className="ff_recharge  fw_bold fs_lg text-white ">
              Ready to get started
              <br></br>
              <span className="text_sky ms-2">Talk to us Today</span>
            </h2>
            <div className="d-flex justify-content-center justify-content-sm-start">
              <button className="  transition_03 ff_recharge fw_bold fs_sm d-flex justify-content-end mt-3   c_pointer text_black sign_btn ">
                Get Started
              </button>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default GetStarted;
