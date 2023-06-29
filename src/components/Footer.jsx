import React from "react";
import navlogo from "../assets/images/webp/navlogo.webp";
import moon from "../assets/images/png/moon.png";

const Footer = () => {
  return (
    <>
      <footer className="pt-5 position-relative">
        <img
          src={moon}
          alt="moon"
          className="z-0 position-absolute bottom-0 w-100"
        />
        <div className="container  container_modified">
          <div className=" row justify-content-md-between mb-3 position-relative z_index_5">
            <div className="col-md-7">
              <img src={navlogo} alt="navlogo" className="  d-inline-block" />

              <p className=" ff_recharge text_white fw_bold  fs_xs my-3 pb-1 max_w_356">
                Nullam viverra natoque amet et sed scelerisque viverra fringilla
                platea. Ullamcorper.
              </p>
              <div className="d-flex gap_12 footer_icons">
                <a href="https://facebook.com/" target="_blank">
                  <span>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.65 34.0822L20.65 34.366L20.9316 34.3302C24.8274 33.8345 28.3884 31.8739 30.8906 28.847C33.3929 25.82 34.6487 21.9539 34.4027 18.0343C34.1568 14.1147 32.4276 10.4358 29.5667 7.7454C26.7057 5.05497 22.9276 3.55487 19.0003 3.55L19.0002 3.55C15.0681 3.54707 11.2828 5.04351 8.41566 7.7344C5.54851 10.4253 3.81523 14.1081 3.569 18.0325C3.32277 21.9569 4.58212 25.8275 7.09044 28.8557C9.59877 31.8838 13.1673 33.8417 17.0689 34.3303L17.35 34.3655V34.0822V22.8V22.55H17.1H13.55V19.25H17.1H17.35V19V15.8574C17.35 13.3377 17.6137 12.4623 18.0807 11.5839L18.081 11.5834C18.544 10.7085 19.2598 9.99333 20.1351 9.53107L20.1366 9.53028C20.8177 9.16477 21.6798 8.93519 23.2396 8.83559C23.7965 8.80005 24.5159 8.83783 25.4019 8.95588V12.0981H24.7019C23.8292 12.0981 23.2023 12.1184 22.7366 12.1692C22.2724 12.2197 21.949 12.3022 21.6938 12.4384C21.3927 12.5939 21.1474 12.8393 20.992 13.1405C20.7312 13.6321 20.6519 14.1202 20.6519 15.8555V19V19.25H20.9019H25.3317L24.5067 22.55H20.9019H20.6519L20.6519 22.8L20.65 34.0822ZM19 37.75C8.64437 37.75 0.25 29.3556 0.25 19C0.25 8.64437 8.64437 0.25 19 0.25C29.3556 0.25 37.75 8.64437 37.75 19C37.75 29.3556 29.3556 37.75 19 37.75Z"
                        fill="#02CDCF"
                        stroke="black"
                        stroke-width="0.5"
                      />
                    </svg>
                  </span>
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0012 1C9.52476 1 1 9.52239 1 20C1 30.4776 9.52476 39 20.0012 39C30.4776 39 39.0024 30.4776 39.0024 20C39.0024 9.52239 30.4776 1 20.0012 1ZM20.0012 37.7344C10.2227 37.7344 2.26793 29.7785 2.26793 20C2.26793 10.2215 10.2227 2.26556 20.0012 2.26556C29.7796 2.26556 37.7344 10.2215 37.7344 20C37.7344 29.7785 29.7796 37.7344 20.0012 37.7344Z"
                        fill="#02CDCF"
                        stroke="#02CDCF"
                      />
                      <path
                        d="M30.422 14.1306C30.5534 13.8873 30.6617 13.6322 30.7455 13.3686C30.7842 13.2464 30.785 13.1153 30.7477 12.9926C30.7104 12.8699 30.6368 12.7614 30.5365 12.6814C30.4363 12.6014 30.3141 12.5537 30.1862 12.5446C30.0583 12.5355 29.9306 12.5654 29.82 12.6304C29.2128 12.9911 28.5555 13.2599 27.8695 13.4279C27.0368 12.6763 25.9553 12.2597 24.8336 12.2583C24.2242 12.2588 23.6211 12.3823 23.0606 12.6215C22.5001 12.8606 21.9936 13.2105 21.5716 13.6501C21.1496 14.0898 20.8206 14.6101 20.6046 15.1799C20.3885 15.7497 20.2897 16.3573 20.3141 16.9662C17.6491 16.6307 15.2155 15.2822 13.5182 13.2004C13.4532 13.1215 13.3701 13.0595 13.2759 13.0196C13.1818 12.9797 13.0795 12.9632 12.9776 12.9713C12.8757 12.9794 12.7772 13.0121 12.6906 13.0664C12.604 13.1207 12.5318 13.1951 12.4802 13.2833C12.0915 13.9504 11.8803 14.7059 11.8666 15.4778C11.8529 16.2497 12.0372 17.0122 12.402 17.6926C12.3125 17.7077 12.2266 17.739 12.1484 17.7851C12.0526 17.8462 11.9737 17.9304 11.919 18.03C11.8643 18.1296 11.8356 18.2414 11.8355 18.355C11.8355 19.7 12.4339 20.9347 13.3985 21.7737L13.357 21.8152C13.2842 21.8976 13.2341 21.9975 13.2117 22.1051C13.1892 22.2128 13.1952 22.3244 13.2291 22.429C13.4302 23.0565 13.766 23.6324 14.2131 24.1165C14.6601 24.6006 15.2076 24.9811 15.8171 25.2315C14.5652 25.8422 13.1643 26.0803 11.781 25.9176C11.6388 25.9031 11.4958 25.9362 11.3745 26.0117C11.2531 26.0871 11.1602 26.2008 11.1103 26.3347C11.0624 26.4696 11.0615 26.6168 11.1078 26.7523C11.154 26.8878 11.2447 27.0037 11.3651 27.0812C13.2457 28.2882 15.4334 28.9294 17.668 28.9286C24.9912 28.9286 29.3685 22.98 29.3685 17.2293L29.3673 17.035C30.0771 16.4809 30.6935 15.8168 31.1934 15.0679C31.2691 14.9547 31.3063 14.8201 31.2996 14.6841C31.2928 14.5481 31.2424 14.4178 31.1559 14.3127C31.0693 14.2075 30.9512 14.133 30.819 14.1002C30.6869 14.0674 30.5476 14.0781 30.422 14.1306ZM28.3542 16.2102C28.2682 16.272 28.1991 16.3544 28.1531 16.4499C28.1072 16.5453 28.0858 16.6507 28.0911 16.7565C28.0982 16.9129 28.1018 17.0717 28.1018 17.2281C28.1018 22.3567 24.1996 27.6619 17.6692 27.6619C16.5045 27.6624 15.348 27.4669 14.2482 27.0836C15.5654 26.8312 16.8028 26.2663 17.8564 25.4365C17.959 25.3556 18.0341 25.245 18.0714 25.1199C18.1088 24.9947 18.1065 24.8611 18.065 24.7372C18.0235 24.6134 17.9448 24.5054 17.8396 24.428C17.7344 24.3506 17.6078 24.3076 17.4772 24.3048C16.9663 24.2951 16.4648 24.1654 16.0132 23.9262C15.5616 23.687 15.1725 23.345 14.8774 22.9279C15.1772 22.9077 15.4711 22.858 15.7566 22.7809C15.8949 22.7439 16.0165 22.6612 16.1016 22.5462C16.1867 22.4312 16.2304 22.2908 16.2254 22.1478C16.2205 22.0048 16.1672 21.8677 16.0743 21.7589C15.9814 21.65 15.8544 21.5759 15.714 21.5486C15.1369 21.4312 14.6026 21.1591 14.1683 20.7615C13.7339 20.3639 13.4158 19.8556 13.248 19.2912C13.5632 19.3706 13.8867 19.4168 14.2102 19.4274C14.4887 19.4263 14.747 19.2556 14.8335 18.9878C14.92 18.72 14.8181 18.4249 14.5823 18.2685C14.0248 17.897 13.5954 17.3625 13.353 16.7379C13.1106 16.1133 13.0669 15.4291 13.2279 14.7788C15.2862 16.8908 18.0656 18.1484 21.0108 18.3005C21.2194 18.3017 21.4019 18.2271 21.5287 18.0742C21.6555 17.9213 21.7041 17.7187 21.659 17.5244C21.497 16.8264 21.5695 16.0945 21.8653 15.4419C22.1611 14.7893 22.6638 14.2524 23.2955 13.9142C23.9272 13.5761 24.6528 13.4556 25.3599 13.5714C26.067 13.6872 26.7162 14.0328 27.2071 14.5548C27.2807 14.6333 27.373 14.6918 27.4754 14.7247C27.5778 14.7577 27.687 14.7641 27.7925 14.7432C27.988 14.7041 28.1812 14.6591 28.372 14.6069C28.2859 14.6713 28.1966 14.731 28.1042 14.7859C27.9813 14.8611 27.8877 14.976 27.8389 15.1116C27.79 15.2472 27.7888 15.3953 27.8355 15.5317C27.8821 15.668 27.9738 15.7844 28.0955 15.8617C28.2171 15.9389 28.3614 15.9724 28.5047 15.9566L28.7203 15.9294C28.6016 16.0272 28.4795 16.1209 28.3542 16.2102Z"
                        fill="#02CDCF"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://www.google.com/search?q=telegram+app&oq=telegram&aqs=chrome.1.69i57j0i271l2.6729j0j7&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                >
                  <span>
                    <svg
                      width="39"
                      height="38"
                      viewBox="0 0 39 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.4026 11.3979L5.70264 19.9479L14.2526 22.7979M30.4026 11.3979L14.2526 22.7979M30.4026 11.3979L22.8026 31.3479L14.2526 22.7979"
                        stroke="#02CDCF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M37.0024 19C37.0024 28.9414 28.9439 37 19.0024 37C9.06103 37 1.00244 28.9414 1.00244 19C1.00244 9.05859 9.06103 1 19.0024 1C28.9439 1 37.0024 9.05859 37.0024 19Z"
                        stroke="#02CDCF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className=" row justify-content-end mt-5 pt-md-5">
                <div className="col-6 col-lg-4">
                  <h2 className=" ff_recharge text-white fs_sm mb-3 pb-1">
                    Quick links
                  </h2>
                  <ul className="p-0 m-0">
                    <li className="mb-3 pb-1 ff_recharge d-inline-block text_white fs_xs">
                      Home
                    </li>
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      Features
                    </li>
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      Marketplace
                    </li>
                    <li className="mb-3 pb-1 ff_recharge d-inline-block text_white fs_xs">
                      Tokens
                    </li>
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      NexChat
                    </li>
                    <li className="mb-3 pb-1 ff_recharge d-inline-block text_white fs_xs">
                      About
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-4">
                  <h2 className=" ff_recharge text-white fs_sm mb-3 pb-1">
                    Information's
                  </h2>
                  <ul className="ps-0 mb-0">
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      Contact
                    </li>
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      Phone
                    </li>
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      terms
                    </li>
                    <li className=" ff_recharge text_white fs_xs c_pointer mb-3 pb-1">
                      Privacy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className=" ff_recharge text-white text-center border_top mb-0">
            @Copyright.nexai
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
