"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073681/Recourses/mzaihysevbpsfmyfaoyn.jpg",
    alt: "Beach Glow Party",
    title: "Beach Glow Party",
    subtitle: "Neon Nights",
    href: "/gallery-details/beach-glow-party",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073702/Recourses/za47sm1zrkab9awdl7xg.jpg",
    alt: "Rooftop Dance",
    title: "Rooftop Dance",
    subtitle: "Sky High Beats",
    href: "/gallery-details/rooftop-dance",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073694/Recourses/qitltenlw6wpiyfmlhan.jpg",
    alt: "Girls Night Out",
    title: "Girls Night Out",
    subtitle: "VIP Lounge",
    href: "/gallery-details/girls-night-out",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073681/Recourses/fizzh4zxwfcofweptwd9.jpg",
    alt: "Day Fest Vibes",
    title: "Day Fest Vibes",
    subtitle: "Chill Zone",
    href: "/gallery-details/day-fest-vibes",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073692/Recourses/z8zwh16tmeuwckq2c8z0.jpg",
    alt: "Live Music",
    title: "Live Music",
    subtitle: "Front Row",
    href: "/gallery-details/live-music",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073658/Recourses/e2rtahxiifgj4crbqiqo.jpg",
    alt: "Art & Vibes",
    title: "Art & Vibes",
    subtitle: "Creative Corner",
    href: "/gallery-details/art-vibes",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073715/Recourses/gdrzzjizkr7ybuanydgc.jpg",
    alt: "Street Fair Fun",
    title: "Street Fair Fun",
    subtitle: "Food & Fun",
    href: "/gallery-details/street-fair-fun",
  },
  {
    src: "https://res.cloudinary.com/dneh5diea/image/upload/v1750073689/Recourses/h4oiznqlne954iy9qfl1.jpg",
    alt: "Neon Light Show",
    title: "Neon Light Show",
    subtitle: "Glow Party",
    href: "/gallery-details/neon-light-show",
  },
];

export default function GalleryOne() {
  const [columns, setColumns] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      className="gallery-one"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div
          className="section-title text-center"
          variants={titleVariants}
        >
          <motion.div
            className="section-title__tagline-box"
            whileHover={{
              scale: 1.05,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.4 },
            }}
          >
            <motion.span
              className="section-title__tagline"
              animate={floatingAnimation}
              whileHover={{
                color: "#ff6b6b",
                transition: { duration: 0.3 },
              }}
            >
              Event Highlights
            </motion.span>
          </motion.div>
          <motion.h2
            className="section-title__title"
            whileHover={{
              scale: 1.02,
              y: -3,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            See the Party <br /> Magic
          </motion.h2>
        </motion.div>

        <motion.div className="row masonary-layout" variants={gridVariants}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <motion.div
                className="gallery-one__single"
                whileHover={{
                  scale: 1.03,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <motion.div
                  className="gallery-one__img"
                  whileHover="hover"
                  initial="initial"
                  animate="animate"
                >
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    variants={imageVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 1,
                      brightness: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 5 + index * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />

                  <motion.div
                    className="gallery-one__content"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        staggerChildren: 0.1,
                      },
                    }}
                    variants={{
                      hover: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="gallery-one__sub-title-box"
                      variants={contentVariants}
                      whileHover={{
                        scale: 1.05,
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        className="gallery-one__sub-title-shape"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      ></motion.div>
                      <motion.p
                        className="gallery-one__sub-title"
                        animate={{
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        }}
                      >
                        {item.subtitle}
                      </motion.p>
                    </motion.div>

                    <motion.h4
                      className="gallery-one__title"
                      variants={contentVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        whileHover={{
                          x: 3,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }}
                      >
                        <Link href={item.href}>
                          <motion.span
                            animate={{
                              textShadow: [
                                "0 0 0px rgba(255,255,255,0)",
                                "0 0 10px rgba(255,255,255,0.3)",
                                "0 0 0px rgba(255,255,255,0)",
                              ],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                          >
                            {item.title}
                          </motion.span>
                        </Link>
                      </motion.div>
                    </motion.h4>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
