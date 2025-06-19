"use client"

import { motion } from "framer-motion"

export default function ContactSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const formFieldVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateY: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateX: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const iconFloatVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.3,
      rotate: [0, -15, 15, -10, 10, 0],
      y: -15,
      filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
      backgroundSize: "300% 300%",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: { duration: 0.1 },
    },
  }

  const magneticEffect = {
    hover: {
      scale: 1.08,
      rotateX: 5,
      rotateY: 5,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <div>
      {/*Contact One Start*/}
      <motion.section
        className="contact-one"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: "1000px" }}
      >
        <div className="container">
          <motion.div className="contact-one__inner">
            <motion.h3
              className="contact-one__title"
              variants={titleVariants}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
            >
              Write here below?
            </motion.h3>
            <motion.p className="contact-one__text" variants={textVariants}>
              For your car we will do everything advice, repairs and they can maintenance. We are the some preferred
              choice
            </motion.p>
            <motion.form
              className="contact-form-validated contact-one__form"
              action="assets/inc/sendemail.php"
              method="post"
              noValidate
              variants={sectionVariants}
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <motion.div
                    className="contact-one__input-box"
                    variants={formFieldVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3), 0 10px 20px rgba(0,0,0,0.1)",
                        borderColor: "#4a90e2",
                        transition: { duration: 0.2 },
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(74, 144, 226, 0)",
                          "0 0 0 2px rgba(74, 144, 226, 0.1)",
                          "0 0 0 0px rgba(74, 144, 226, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <motion.div
                    className="contact-one__input-box"
                    variants={formFieldVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3), 0 10px 20px rgba(0,0,0,0.1)",
                        borderColor: "#4a90e2",
                        transition: { duration: 0.2 },
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(74, 144, 226, 0)",
                          "0 0 0 2px rgba(74, 144, 226, 0.1)",
                          "0 0 0 0px rgba(74, 144, 226, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <motion.div
                    className="contact-one__input-box"
                    variants={formFieldVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3), 0 10px 20px rgba(0,0,0,0.1)",
                        borderColor: "#4a90e2",
                        transition: { duration: 0.2 },
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(74, 144, 226, 0)",
                          "0 0 0 2px rgba(74, 144, 226, 0.1)",
                          "0 0 0 0px rgba(74, 144, 226, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </motion.div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <motion.div
                    className="contact-one__input-box"
                    variants={formFieldVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="select-box">
                      <motion.select
                        className="selectmenu wide"
                        defaultValue="Choose Option"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3), 0 10px 20px rgba(0,0,0,0.1)",
                          borderColor: "#4a90e2",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <option value="Choose Option">Choose Option</option>
                        <option value="Night Parties">Night Parties</option>
                        <option value="Concerts">Concerts</option>
                        <option value="Club Events">Club Events</option>
                        <option value="Music Festivals">Music Festivals</option>
                        <option value="DJ Nights">DJ Nights</option>
                        <option value="New Year Celebrations">New Year Celebrations</option>
                        <option value="Beach Parties">Beach Parties</option>
                        <option value="College/University Events">College/University Events</option>
                        <option value="Corporate Night Events">Corporate Night Events</option>
                        <option value="Celebrity Meetups">Celebrity Meetups</option>
                      </motion.select>
                    </div>
                  </motion.div>
                </div>
                <div className="col-xl-12">
                  <motion.div
                    className="contact-one__input-box text-message-box"
                    variants={formFieldVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.textarea
                      name="message"
                      placeholder="Your Message"
                      whileFocus={{
                        scale: 1.01,
                        boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3), 0 10px 20px rgba(0,0,0,0.1)",
                        borderColor: "#4a90e2",
                        transition: { duration: 0.2 },
                      }}
                    ></motion.textarea>
                  </motion.div>
                  <motion.div className="contact-one__btn-box" variants={formFieldVariants}>
                    <motion.button
                      type="submit"
                      className="thm-btn contact-one__btn"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        backgroundPosition: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                      }}
                    >
                      Submit Now
                      <motion.span
                        className="icon-arrow-right"
                        animate={{
                          x: [0, 8, 0],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      ></motion.span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.form>
            <div className="result"></div>
          </motion.div>
        </div>
      </motion.section>
      {/*Contact One End*/}

      {/*Contact Two Start*/}
      <motion.section
        className="contact-two"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: "1000px" }}
      >
        <div className="container">
          <div className="row">
            {/* Contact Two Single Start */}
            <div className="col-xl-4 col-lg-4">
              <motion.div
                className="contact-two__single"
                variants={cardVariants}
                whileHover={{
                  y: -20,
                  scale: 1.08,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  filter: "brightness(1.1)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                <motion.div
                  className="contact-two__icon"
                  variants={iconFloatVariants}
                  animate="animate"
                  whileHover="hover"
                >
                  <span className="icon-pin"></span>
                </motion.div>
                <motion.h3
                  className="contact-two__title"
                  whileHover={{
                    scale: 1.1,
                    color: "#4a90e2",
                    transition: { duration: 0.2 },
                  }}
                >
                  Location
                </motion.h3>
                <motion.p
                  className="contact-two__text"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  2972 Westheimer Rd. Santa Ana, <br />
                  Illinois 85486
                </motion.p>
              </motion.div>
            </div>
            {/* Contact Two Single End */}

            {/* Contact Two Single Start */}
            <div className="col-xl-4 col-lg-4">
              <motion.div
                className="contact-two__single"
                variants={cardVariants}
                whileHover={{
                  y: -20,
                  scale: 1.08,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  filter: "brightness(1.1)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                <motion.div
                  className="contact-two__icon"
                  variants={iconFloatVariants}
                  animate="animate"
                  whileHover="hover"
                >
                  <span className="icon-paper-plan"></span>
                </motion.div>
                <motion.h3
                  className="contact-two__title"
                  whileHover={{
                    scale: 1.1,
                    color: "#4a90e2",
                    transition: { duration: 0.2 },
                  }}
                >
                  E-mail
                </motion.h3>
                <motion.p className="contact-two__text">
                  <motion.a
                    href="mailto:tim.jennings@example.com"
                    whileHover={{
                      scale: 1.1,
                      color: "#4a90e2",
                      textShadow: "0 0 10px rgba(74, 144, 226, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    tim.jennings@example.com
                  </motion.a>
                </motion.p>
                <motion.p className="contact-two__text">
                  <motion.a
                    href="mailto:debra.holt@example.com"
                    whileHover={{
                      scale: 1.1,
                      color: "#4a90e2",
                      textShadow: "0 0 10px rgba(74, 144, 226, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    debra.holt@example.com
                  </motion.a>
                </motion.p>
              </motion.div>
            </div>
            {/* Contact Two Single End */}

            {/* Contact Two Single Start */}
            <div className="col-xl-4 col-lg-4">
              <motion.div
                className="contact-two__single"
                variants={cardVariants}
                whileHover={{
                  y: -20,
                  scale: 1.08,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  filter: "brightness(1.1)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <motion.div
                  className="contact-two__icon"
                  variants={iconFloatVariants}
                  animate="animate"
                  whileHover="hover"
                >
                  <span className="icon-call"></span>
                </motion.div>
                <motion.h3
                  className="contact-two__title"
                  whileHover={{
                    scale: 1.1,
                    color: "#4a90e2",
                    transition: { duration: 0.2 },
                  }}
                >
                  Contact
                </motion.h3>
                <motion.p className="contact-two__text">
                  <motion.a
                    href="tel:019457896332"
                    whileHover={{
                      scale: 1.1,
                      color: "#4a90e2",
                      textShadow: "0 0 10px rgba(74, 144, 226, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    019457896332
                  </motion.a>
                  ,{" "}
                  <motion.a
                    href="tel:017485962546"
                    whileHover={{
                      scale: 1.1,
                      color: "#4a90e2",
                      textShadow: "0 0 10px rgba(74, 144, 226, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    017485962546
                  </motion.a>
                </motion.p>
                <motion.p className="contact-two__text">
                  <motion.a
                    href="tel:016457896333"
                    whileHover={{
                      scale: 1.1,
                      color: "#4a90e2",
                      textShadow: "0 0 10px rgba(74, 144, 226, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    016457896333
                  </motion.a>
                </motion.p>
              </motion.div>
            </div>
            {/* Contact Two Single End */}
          </div>
        </div>
      </motion.section>
      {/*Contact Two End*/}

      {/*CTA One Start*/}
      <motion.section
        className="cta-one"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.div
            className="cta-one__inner"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -10,
              // boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="cta-one__title"
              variants={titleVariants}
              // animate={{
              //   backgroundImage: [
              //     "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
              //     "linear-gradient(45deg, #4ecdc4, #45b7d1)",
              //     "linear-gradient(45deg, #45b7d1, #96ceb4)",
              //     "linear-gradient(45deg, #96ceb4, #ff6b6b)",
              //   ],
              // }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
            >
              Be the First to Party
              <br />
              Get Exclusive Event Alerts
            </motion.h3>
            <motion.form
              className="cta-one__form mc-form"
              data-url="MC_FORM_URL"
              noValidate
              variants={formFieldVariants}
            >
              <motion.div
                className="cta-one__form-input-box"
                // whileHover={{
                //   scale: 1.05,
                //   y: -5,
                //   // boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                //   transition: { duration: 0.3 },
                // }}
                // animate={{
                //   boxShadow: [
                //     "0 5px 15px rgba(0,0,0,0.1)",
                //     "0 10px 25px rgba(74, 144, 226, 0.2)",
                //     "0 5px 15px rgba(0,0,0,0.1)",
                //   ],
                // }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  name="EMAIL"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#4a90e2",
                    transition: { duration: 0.2 },
                  }}
                />
                <motion.button
                  type="submit"
                  className="cta-one__btn"
                  
                >
                  <motion.span
                    className="icon-paper-plan"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 15, -10, 5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  ></motion.span>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>
      {/*CTA One End*/}
    </div>
  )
}
