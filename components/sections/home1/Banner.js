"use client"

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

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
}

export default function Banner() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <motion.section className="main-slider" variants={sectionVariants} initial="hidden" animate="visible">
        <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <motion.div className="main-slider__img" variants={imageVariants}>
                <motion.img
                  src="https://res.cloudinary.com/dneh5diea/image/upload/v1749922467/Blog/Base/v4v1o2jomdmxurww2xma.png"
                  alt="Banner"
                  className="image-hover"
                  width={1200}
                  height={600}
                  style={{
                    width: "100%",
                    maxHeight: "600px",
                    borderRadius: "16px",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <motion.div className="main-slider__content" variants={contentVariants}>
                      <motion.p
                        className="main-slider__sub-title"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        Music Festival
                      </motion.p>
                      <motion.h2
                        className="main-slider__title"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                      >
                        Discover a World <br /> <span>of Celebration</span>
                      </motion.h2>
                      <motion.p
                        style={{ maxWidth: "600px" }}
                        className="main-slider__text"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.01,
                          transition: { duration: 0.2 },
                        }}
                      >
                        Experience the magic of live performances curated by Markhor Event. From electrifying concerts
                        to cultural showcases, immerse yourself in an unforgettable celebration of music and community.
                      </motion.p>
                      <motion.ul className="list-unstyled main-slider__address" variants={contentVariants}>
                        <motion.li
                          variants={itemVariants}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.div
                            className="icon"
                            animate={{
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, -10, 10, 0],
                              transition: { duration: 0.4 },
                            }}
                          >
                            <span className="icon-pin"></span>
                          </motion.div>
                          <motion.div
                            className="text"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <p>Karachi Expo Center, Shahrah-e-Faisal, Karachi, Pakistan</p>
                          </motion.div>
                        </motion.li>
                        <motion.li
                          variants={itemVariants}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        >
                          <motion.div
                            className="icon"
                            animate={{
                              y: [0, -3, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 0.3,
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, 360],
                              transition: { duration: 0.6 },
                            }}
                          >
                            <span className="icon-clock"></span>
                          </motion.div>
                          <motion.div
                            className="text"
                            whileHover={{
                              scale: 1.02,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <p>6 PM – Midnight | June 15, 2025</p>
                          </motion.div>
                        </motion.li>
                      </motion.ul>
                      <motion.div className="main-slider__btn-box" variants={itemVariants}>
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            y: -3,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{
                            scale: 0.95,
                            transition: { duration: 0.1 },
                          }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Link href="/contact" className="main-slider__btn thm-btn">
                            Purchase Ticket
                            <motion.span
                              className="icon-arrow-right"
                              animate={{
                                x: [0, 3, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            ></motion.span>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <motion.div
          className="swiper-pagination"
          id="main-slider-pagination"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />
      </motion.section>
    </>
  )
}
