import React, { useState } from "react";
import navlogo from "../assets/images/webp/navlogo.webp";

const Header = () => {
  const [openNav, setopenNav] = useState(true);
  if (openNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <nav className="pt-3">
        <div className="container container_modified d-flex align-items-center justify-content-between">
          <div className="d-flex w-100 align-items-center  justify-content-between">
            <a href="#" className="d-inline page_logo">
              <span className="nav_logo ">
                <img src={navlogo} alt="navlogo" />
              </span>
            </a>
            <div
              onClick={() => setopenNav(false)}
              className="d-flex justify-content-evenly c_pointer gap-1 d-inline-block flex-column  d-lg-none opacity-100 align-items-end"
            >
              <span className="menu_line"></span>
              <span className="menu_line_2 "></span>
              <span className="menu_line"></span>
            </div>

            <ul className="ps-0 mb-0 d-none d-lg-flex  align-items-center gap-4">
              <li>
                <a
                  href="#"
                  className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
                >
                  NexChat
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
                >
                  Tokens
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="d-none transition_03 d-lg-flex ff_recharge fw_bold fs_sm  text_black sign_btn"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div
          className={
            openNav ? "showNav d-lg-none d-block" : "hideNav d-lg-none d-block"
          }
        >
          <ul className="ps-0 mb-0 position-relative d-flex gap-4 justify-content-center w-100 min-vh-100 flex-column align-items-center">
            <button
              onClick={() => setopenNav(true)}
              className="btn btn-close btn-close-white bg-transparent opacity-100  position-absolute top-0 end-0  me-4"
            ></button>
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block"
              >
                Home
              </a>
            </li>
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
              >
                Marketplace
              </a>
            </li>{" "}
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
              >
                About
              </a>
            </li>{" "}
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
              >
                NexChat
              </a>
            </li>{" "}
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="ff_poppins fw_regular fs_xs text-white  nav_links d-inline-block 
                  "
              >
                Tokens
              </a>
            </li>{" "}
            <li onClick={() => setopenNav(true)}>
              <a
                href="#"
                className="d-none d-lg-flex ff_recharge fw_bold fs_sm  text_black sign_btn"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
