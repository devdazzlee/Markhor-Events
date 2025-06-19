"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BuyTicket() {
  // State for dynamic content
  const [ticketContent, setTicketContent] = useState({
    address: "Clifton Beach, Sea View, Karachi, Pakistan",
    timing: "8 PM – Midnight | June 20, 2025",
    title: "Girls' Night – Let's Sparkle!",
    description:
      "Grab your besties and dance under the stars at Karachi's coolest glow party. Great music, bright lights, and nonstop fun await!",
    buttons: [
      {
        id: 1,
        text: "Buy Ticket",
        link: "/contact",
        class: "buy-ticket__btn-1",
      },
      {
        id: 2,
        text: "Get in Touch",
        link: "/contact",
        class: "buy-ticket__btn-2",
      },
    ],
    ticketImage:
      "https://res.cloudinary.com/dneh5diea/image/upload/v1750073698/Recourses/nfluoi2bpv2sixt5a9v5.jpg",
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -120,
      rotateY: -20,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 120,
      rotateY: 20,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const listItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(5px)",
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
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotateX: 20,
      filter: "blur(15px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    animate: {
      scale: [1, 1.1, 1],
      y: [0, -3, 0],
      transition: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.3,
      y: -8,
      filter: "drop-shadow(0 10px 20px rgba(198, 161, 54, 0.3))",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Buy Ticket Start */}
      <motion.section
        className="buy-ticket"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: "1500px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <motion.div className="buy-ticket__left" variants={leftVariants}>
                <motion.ul
                  className="buy-ticket__address list-unstyled"
                  variants={sectionVariants}
                >
                  <motion.li
                    variants={listItemVariants}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      boxShadow: "0 10px 25px rgba(198, 161, 54, 0.1)",
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      y: [0, -3, 0],
                      transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <motion.div
                      className="icon"
                      variants={iconVariants}
                      animate="animate"
                      whileHover="hover"
                    >
                      <span className="icon-clock"></span>
                    </motion.div>
                    <motion.div
                      className="text"
                      whileHover={{
                        scale: 1.02,
                        color: "#c6a136",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <p>{ticketContent.address}</p>
                    </motion.div>
                  </motion.li>
                  <motion.li
                    variants={listItemVariants}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                      boxShadow: "0 10px 25px rgba(198, 161, 54, 0.1)",
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      y: [0, -3, 0],
                      transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    }}
                  >
                    <motion.div
                      className="icon"
                      variants={iconVariants}
                      animate="animate"
                      whileHover="hover"
                      transition={{ delay: 0.2 }}
                    >
                      <span className="icon-pin"></span>
                    </motion.div>
                    <motion.div
                      className="text"
                      whileHover={{
                        scale: 1.02,
                        color: "#c6a136",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <p>{ticketContent.timing}</p>
                    </motion.div>
                  </motion.li>
                </motion.ul>
                <motion.h3
                  className="buy-ticket__title"
                  variants={titleVariants}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(198, 161, 54, 0.4)",
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0,0,0,0.1)",
                      "0 0 20px rgba(198, 161, 54, 0.3)",
                      "0 0 10px rgba(0,0,0,0.1)",
                    ],
                  }}
                  transition={{
                    textShadow: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, #8e7424 0%, #c6a136 50%, #e3c565 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {ticketContent.title}
                </motion.h3>
                <motion.p
                  className="buy-ticket__text"
                  variants={textVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                >
                  {ticketContent.description}
                </motion.p>
                <motion.div
                  className="buy-ticket__btn-box"
                  variants={sectionVariants}
                >
                  {ticketContent.buttons.map((button, index) => (
                    <motion.div
                      key={button.id}
                      variants={buttonVariants}
                      whileHover={{
                        scale: 1.08,
                        y: -5,
                        rotateX: -5,
                        boxShadow: "0 15px 30px rgba(198, 161, 54, 0.2)",
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                      animate={{
                        y: [0, -3, 0],
                        boxShadow: [
                          "0 5px 15px rgba(0,0,0,0.1)",
                          "0 10px 25px rgba(198, 161, 54, 0.2)",
                          "0 5px 15px rgba(0,0,0,0.1)",
                        ],
                        transition: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }}
                    >
                      <Link
                        href={button.link}
                        className={`${button.class} thm-btn`}
                      >
                        {button.text}
                        <motion.span
                          className="icon-arrow-right"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        ></motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <div className="col-xl-6">
              <motion.div
                className="buy-ticket__right"
                variants={rightVariants}
              >
                <motion.div
                  className="buy-ticket__img"
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateX: -5,
                    rotateY: 5,
                    y: -10,
                    boxShadow: "0 25px 50px rgba(198, 161, 54, 0.2)",
                    filter: "brightness(1.1) contrast(1.1)",
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  animate={{
                    y: [0, -8, 0],
                    rotateX: [0, 2, 0],
                    boxShadow: [
                      "0 10px 25px rgba(0,0,0,0.1)",
                      "0 20px 40px rgba(198, 161, 54, 0.2)",
                      "0 10px 25px rgba(0,0,0,0.1)",
                    ],
                    filter: [
                      "brightness(1) contrast(1) saturate(1)",
                      "brightness(1.05) contrast(1.05) saturate(1.1)",
                      "brightness(1) contrast(1) saturate(1)",
                    ],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.img
                    src={ticketContent.ticketImage}
                    alt="Ticket Image"
                    animate={{
                      borderRadius: ["20px", "25px", "20px"],
                      transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Buy Ticket End */}
    </>
  );
}
  