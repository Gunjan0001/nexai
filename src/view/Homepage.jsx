import { useEffect, useState } from "react";
import Header from "../components/Header";
import navlogo from "../assets/images/webp/navlogo.webp";
import Hero from "../components/Hero";
import Assistant from "../components/Assistant";
import Alaram from "../components/Alaram";
import About from "../components/About";

import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Technology from "../components/Technology";
import Backtotop from "../components/Backtotop";

const Homepage = () => {
  const [preloaderActive, setpreloaderActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpreloaderActive(false);
    }, 2800);
    if (preloaderActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
  return (
    <>
      <div className="position-relative ">
        {preloaderActive && (
          <div
            className={`
          } preloader position-fixed min-vh-100 end-0 top-0 w-100 z-99 d-flex justify-content-center align-items-center `}
          >
            <span>
              <img src={navlogo} alt="navlogo" />
            </span>
          </div>
        )}
        <div className=" overflow_x_hidden hero_bg">
          <Header />
          <Hero />
        </div>
        <Assistant />
        <Technology />
        <Alaram />
        <About />
        <GetStarted />
        <Footer />
        <Backtotop />
      </div>
    </>
  );
};

export default Homepage;
