"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent, setServicesContent] = useState({
    sectionTagline: "Feel the Vibe",
    sectionTitle: "Karachi's Ultimate Party Scene",
    services: [
      {
        id: 1,
        title: "Sunset Beats",
        description:
          "Join us at the beach for a neon-lit rave with top DJs, awesome visuals, and non-stop dancing as the sun dips below the waves.",
        icon: "icon-camera",
        link: "/sunset-beats",
      },
      {
        id: 2,
        title: "City Lights Carnival",
        description:
          "Stroll through Karachi's coolest street festival—live bands, food trucks serving spicy local bites, and art installations on every corner.",
        icon: "icon-skewer",
        link: "/city-lights-carnival",
      },
      {
        id: 3,
        title: "VIP Lounge Sessions",
        description:
          "Chill in an exclusive rooftop lounge with handcrafted cocktails, live acoustic sets, and panoramic views of the city skyline.",
        icon: "icon-dinner-table",
        link: "/vip-lounge-sessions",
      },
    ],
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.7,
      rotateX: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.2, 1],
      filter: [
        "drop-shadow(0 5px 15px rgba(0,0,0,0.2))",
        "drop-shadow(0 15px 30px rgba(0,0,0,0.4))",
        "drop-shadow(0 5px 15px rgba(0,0,0,0.2))",
      ],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.6,
      rotate: [0, -20, 20, -15, 15, 0],
      y: -20,
      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Services One Start */}
      <motion.section
        className="services-one"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ perspective: "1500px" }}
      >
        <div className="container">
          <motion.div
            className="section-title text-center"
            variants={titleVariants}
          >
            <motion.div
              className="section-title__tagline-box"
              whileHover={{
                scale: 1.15,
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.5 },
              }}
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span
                className="section-title__tagline"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  textShadow: [
                    "0 0 10px rgba(0,0,0,0.3)",
                    "0 0 20px rgba(0,0,0,0.5)",
                    "0 0 10px rgba(0,0,0,0.3)",
                  ],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  textShadow: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                {servicesContent.sectionTagline}
              </motion.span>
            </motion.div>
            <motion.h2
              className="section-title__title"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(0,0,0,0.4)",
                transition: { duration: 0.3 },
              }}
              animate={{
                textShadow: [
                  "0 0 5px rgba(0,0,0,0.2)",
                  "0 0 15px rgba(0,0,0,0.4)",
                  "0 0 5px rgba(0,0,0,0.2)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {servicesContent.sectionTitle}
            </motion.h2>
          </motion.div>
          <motion.div className="row" variants={sectionVariants}>
            {servicesContent.services.map((service, index) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <motion.div
                  className="services-one__single"
                  variants={cardVariants}
                  whileHover={{
                    y: -25,
                    scale: 1.08,
                    rotateX: -10,
                    rotateY: 5,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                    filter: "brightness(1.1)",
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateX: [0, 3, 0],
                    boxShadow: [
                      "0 10px 25px rgba(0,0,0,0.1)",
                      "0 20px 40px rgba(0,0,0,0.2)",
                      "0 10px 25px rgba(0,0,0,0.1)",
                    ],
                    transition: {
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.7,
                    },
                  }}
                >
                  <motion.div
                    className="services-one__icon"
                    variants={iconVariants}
                    animate="animate"
                    whileHover="hover"
                  >
                    <motion.span
                      className={service.icon}
                      animate={{
                        color: [
                          "currentColor",
                          "rgba(0,0,0,0.6)",
                          "currentColor",
                        ],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        color: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        },
                        scale: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }}
                    ></motion.span>
                  </motion.div>
                  <motion.h3
                    className="services-one__title"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      textShadow: "0 0 15px rgba(0,0,0,0.3)",
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      y: [0, -3, 0],
                      textShadow: [
                        "0 0 5px rgba(0,0,0,0.1)",
                        "0 0 10px rgba(0,0,0,0.2)",
                        "0 0 5px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  >
                    <Link href={service.link}>{service.title}</Link>
                  </motion.h3>
                  <motion.p
                    className="services-one__text"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    animate={{
                      opacity: [0.8, 1, 0.8],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.6,
                    }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    whileHover={{
                      x: 10,
                      scale: 1.1,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                    }}
                    animate={{
                      x: [0, 5, 0],
                      boxShadow: [
                        "0 2px 8px rgba(0,0,0,0.1)",
                        "0 5px 15px rgba(0,0,0,0.2)",
                        "0 2px 8px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <Link
                      href={service.link}
                      className="services-one__read-more"
                    >
                      Read More{" "}
                      <motion.span
                        className="icon-arrow-right"
                        animate={{
                          x: [0, 8, 0],
                          rotate: [0, 15, -10, 5, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      ></motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Services One End */}
    </>
  );
}
