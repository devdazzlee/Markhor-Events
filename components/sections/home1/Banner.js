// 'use client'
// import Link from "next/link"
// import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

// export default function Banner() {
//   return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "60px 40px",
//       width: "100%",
//       maxWidth: "1600px",
//       margin: "0 auto",
//       gap: "40px",
//     }}>
//       <style>
//         {`
//           @keyframes fadeSlideInLeft {
//             0% { opacity: 0; transform: translateX(-40px); }
//             100% { opacity: 1; transform: translateX(0); }
//           }

//           @keyframes fadeSlideInRight {
//             0% { opacity: 0; transform: translateX(40px); }
//             100% { opacity: 1; transform: translateX(0); }
//           }

//           .image-hover:hover {
//             transform: scale(1.03);
//             box-shadow: 0 10px 25px rgba(0,0,0,0.15);
//           }

//           .fade-left {
//             animation: fadeSlideInLeft 1s ease-out forwards;
//           }

//           .fade-right {
//             animation: fadeSlideInRight 1s ease-out forwards;
//             animation-delay: 0.3s;
//           }
//         `}
//       </style>

//       {/* Left Content */}
//       <div className="fade-left" style={{
//         width: "50%",
//         opacity: 0
//       }}>
//         <p style={{
//           fontSize: "20px",
//           marginBottom: "10px",
//           fontWeight: "600",
//           color: "#ff4081"
//         }}>🌟 Music Festival</p>

//         <h2 style={{
//           fontSize: "42px",
//           lineHeight: "1.3",
//           marginBottom: "20px",
//           fontWeight: "700",
//           color: "white"
//         }}>
//           Discover a World <br />
//           <span style={{ color: "#e91e63", fontWeight: "800" }}>of Celebration</span>
//         </h2>

//         <p style={{
//           fontSize: "17px",
//           lineHeight: "1.8",
//           marginBottom: "25px",
//           color: "white"
//         }}>
//           Experience the magic of live performances curated by Markhor Event. From electrifying concerts to cultural showcases, immerse yourself in an unforgettable celebration of music and community.
//         </p>

//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//             <span style={{ marginRight: "10px", fontSize: "20px", color: "#e91e63" }} className="icon-pin"></span>
//             <p style={{ margin: 0, color: "white" }}>Karachi Expo Center, Shahrah-e-Faisal, Karachi, Pakistan</p>
//           </li>
//           <li style={{ display: "flex", alignItems: "center" }}>
//             <span style={{ marginRight: "10px", fontSize: "20px", color: "#e91e63" }} className="icon-clock"></span>
//             <p style={{ margin: 0, color: "white" }}>6 PM – Midnight | June 15, 2025</p>
//           </li>
//         </ul>
//       </div>

//       {/* Right Image */}
//       <div className="fade-right" style={{
//         width: "50%",
//         textAlign: "right",
//         opacity: 0
//       }}>
//         <img
//           src="assets/images/IMG_3013.PNG"
//           alt="Banner"
//           className="image-hover"
//           style={{
//             width: "100%",
//             maxHeight: "450px",
//             borderRadius: "16px",
//             transition: "all 0.4s ease-in-out",
//             boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
//           }}
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
  },
};

export default function Banner() {
  return (
    <>
      {/* banner-one */}
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                <img
                  src="assets/images/IMG_3013.PNG"
                  alt="Banner"
                  className="image-hover"
                  style={{
                    width: "100%",
                    maxHeight: "600px",
                    borderRadius: "16px",
                    // transition: "all 0.4s ease-in-out",
                    // boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
              {/* <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
              </div> */}

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">Music Festival</p>
                      <h2 className="main-slider__title">
                        Discover a World <br /> <span>of Celebration</span>
                      </h2>
                      <p  style={{"maxWidth" :"600px"}} className="main-slider__text">
                        Experience the magic of live performances curated by
                        Markhor Event. From electrifying concerts to cultural
                        showcases, immerse yourself in an unforgettable
                        celebration of music and community.
                      </p>
                      <ul className="list-unstyled main-slider__address">
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              Karachi Expo Center, Shahrah-e-Faisal, Karachi,
                              Pakistan
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>6 PM – Midnight | June 15, 2025</p>
                          </div>
                        </li>
                      </ul>
                      <div className="main-slider__btn-box">
                        <Link
                          href="/contact"
                          className="main-slider__btn thm-btn"
                        >
                          Purchase Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 
            <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                <img src="assets/images/resources/main-slider-img-1-2.jpg" alt="" />
              </div>
              <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">Music Festival</p>
                      <h2 className="main-slider__title">
                        Discover a World <br /> <span>of Celebration</span>
                      </h2>
                      <p className="main-slider__text">
                        As an AI language model, I don't have personal opinions or points of view.
                        However, I <br /> can tell you that design is a multifaceted field that encompasses various elements.
                      </p>
                      <ul className="list-unstyled main-slider__address">
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>10 Am To 10 Pm 20 April 2024</p>
                          </div>
                        </li>
                      </ul>
                      <div className="main-slider__btn-box">
                        <Link href="/contact" className="main-slider__btn thm-btn">
                          Purchase Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="main-slider__img">
                <img src="assets/images/resources/main-slider-img-1-3.jpg" alt="" />
              </div>
              <div className="main-slider__shpae-1">
                <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
              </div>
              <div className="main-slider__shpae-2">
                <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__start-1">
                <img src="assets/images/shapes/main-slider-star-1.png" alt="" />
              </div>
              <div className="main-slider__start-2 zoominout">
                <img src="assets/images/shapes/main-slider-star-2.png" alt="" />
              </div>
              <div className="main-slider__start-3">
                <img src="assets/images/shapes/main-slider-star-3.png" alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">Music Festival</p>
                      <h2 className="main-slider__title">
                        Discover a World <br /> <span>of Celebration</span>
                      </h2>
                      <p className="main-slider__text">
                        As an AI language model, I don't have personal opinions or points of view.
                        However, I <br /> can tell you that design is a multifaceted field that encompasses various elements.
                      </p>
                      <ul className="list-unstyled main-slider__address">
                        <li>
                          <div className="icon">
                            <span className="icon-pin" />
                          </div>
                          <div className="text">
                            <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock" />
                          </div>
                          <div className="text">
                            <p>10 Am To 10 Pm 20 April 2024</p>
                          </div>
                        </li>
                      </ul>
                      <div className="main-slider__btn-box">
                        <Link href="/contact" className="main-slider__btn thm-btn">
                          Purchase Ticket <span className="icon-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </div>
        </Swiper>
        <div className="swiper-pagination" id="main-slider-pagination" />
      </section>
      {/* banner-one */}
    </>
  );
}
