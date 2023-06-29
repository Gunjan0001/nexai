import React from "react";
const Hero = () => {
  return (
    <section className=" pb-5 pt-4 pt-sm-5 mt-xl-5  flex-grow-1 position-relative d-flex align-items-center justify-content-center">
      <div className="container container_modified pt-sm-5 pt-xl-0">
        <div className="row ps-1">
          <div className="col-sm-8 col-md-7">
            <h2 className=" ff_recharge fw_bold text-white fs_xl mb-3  mt-3 mt-sm-0 ">
              <span className="text_sky"> Nexai</span> is an advanced AI-powered
              home assistant
            </h2>
            <p className=" ff_poppins fw_regular text_grey fs_xs mb-xl-5 mb-4 pb-sm-3 pb-xl-2 ">
              Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
              odio.
            </p>
            <button className="transition_03 ff_recharge fw_bold fs_sm d-flex justify-content-end mt-3  mt-lg-0   c_pointer text_black sign_btn ">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
