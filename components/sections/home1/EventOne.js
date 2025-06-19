"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EventOne() {
  // State for dynamic content
  const [eventContent, setEventContent] = useState({
    sectionTagline: "Vibe Check",
    sectionTitle: "Where Epic Memories Are Made",
    buttonText: "Secure Your Spot",
    buttonLink: "/event-details",
    points: [
      {
        id: 1,
        iconClass: "icon-air-horn",
        title: "Hype DJs & Visuals",
        description:
          "Feel the bass drop with top DJs and jaw-dropping light shows that keep the energy soaring.",
        link: "/event",
      },
      {
        id: 2,
        iconClass: "icon-party-blower",
        title: "Interactive Chill Zones",
        description:
          "Hang out in Instagram-worthy lounges with AR filters, viral photo ops, and pop-up snack bars.",
        link: "/event",
      },
    ],
    eventImage:
      "https://res.cloudinary.com/dneh5diea/video/upload/v1749921775/arsnt9aoreem6rusgkrl.mov",
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
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
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const pointVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.3,
      rotate: [0, -15, 15, 0],
      y: -10,
      filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const videoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      {/* Event One Start */}
      <motion.section
        className="event-one"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: "1000px" }}
      >
        <div className="container">
          <motion.div className="event-one__inner" variants={sectionVariants}>
            <motion.div className="event-one__top" variants={sectionVariants}>
              <motion.div
                className="section-title text-left"
                variants={titleVariants}
              >
                <motion.div
                  className="section-title__tagline-box"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.span
                    className="section-title__tagline"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {eventContent.sectionTagline}
                  </motion.span>
                </motion.div>
                <motion.h2
                  className="section-title__title"
                  whileHover={{
                    scale: 1.02,
                    textShadow: "0 0 20px rgba(0,0,0,0.3)",
                    transition: { duration: 0.3 },
                  }}
                >
                  {eventContent.sectionTitle}
                </motion.h2>
              </motion.div>
              <motion.div
                className="event-one__btn-box"
                variants={buttonVariants}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href={eventContent.buttonLink}
                    className="event-one__btn thm-btn"
                  >
                    {eventContent.buttonText}
                    <motion.span
                      className="icon-arrow-right"
                      animate={{
                        x: [0, 5, 0],
                        rotate: [0, 10, 0],
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

            <motion.ul
              className="list-unstyled event-one__points"
              variants={sectionVariants}
            >
              {eventContent.points.map((point, index) => (
                <motion.li
                  key={point.id}
                  variants={pointVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    },
                  }}
                >
                  <motion.div
                    className="icon"
                    variants={iconVariants}
                    animate="animate"
                    whileHover="hover"
                  >
                    <span className={point.iconClass}></span>
                  </motion.div>
                  <motion.div className="content">
                    <motion.h4
                      whileHover={{
                        scale: 1.05,
                        color: "#4a90e2",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Link href={point.link}>{point.title}</Link>
                    </motion.h4>
                    <motion.p
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {point.description}
                    </motion.p>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              style={{ width: "100%" }}
              variants={videoVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.video
                src={
                  "https://res.cloudinary.com/dneh5diea/video/upload/v1749921775/arsnt9aoreem6rusgkrl.mov"
                }
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                  height: "350px",
                }}
                animate={{
                  filter: [
                    "brightness(1) contrast(1)",
                    "brightness(1.1) contrast(1.1)",
                    "brightness(1) contrast(1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* Event One End */}
    </>
  );
}
