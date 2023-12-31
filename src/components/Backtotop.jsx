import React, { useEffect, useState } from "react";
import { BackToTopArrow } from "./Icon";
const Backtotop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition > 200 ? (
        <div
          className="  position-fixed  backtotop  c_pointer z_index pe-3"
          onClick={() => scrollToTop()}
        >
          <BackToTopArrow />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Backtotop;
