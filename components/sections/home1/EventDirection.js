"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

export default function EventDirection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [eventContent, setEventContent] = useState({
    tagline: "Get in the Groove",
    title: "Party Vibes <br> All Night Long",
    text: "Grab your besties and dance under the lights. Live beats, cool vibes, and fun surprises await!",
    phone: "3075550133",
    callText: "Let's Chat",
    callNumber: "(307) 555-0133",
    iconSrc: "assets/images/icon/event-direction-chat-icon.png",
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

  const leftContentVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const counterVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6,
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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  const counters = [
    { end: 50, suffix: "+", text: "Top Performers", delay: 0 },
    { end: 8, suffix: "hrs", text: "Hours of Beats", delay: 0.2 },
    { end: 5, suffix: "+", text: "Party Zones", delay: 0.4 },
    { end: 20, suffix: "+", text: "Glow Spots", delay: 0.6 },
  ];

  return (
    <>
      {/* Event Direction Start */}
      <motion.section
        className="event-direction"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container">
          <motion.div
            className="event-direction__inner"
            variants={sectionVariants}
          >
            <div className="row">
              <div className="col-xl-7">
                <motion.div
                  className="event-direction__left"
                  variants={leftContentVariants}
                >
                  <motion.div
                    className="section-title text-left"
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
                        {eventContent.tagline}
                      </motion.span>
                    </motion.div>
                    <motion.h2
                      className="section-title__title"
                      dangerouslySetInnerHTML={{ __html: eventContent.title }}
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
                    />
                  </motion.div>

                  <motion.p
                    className="event-direction__text"
                    dangerouslySetInnerHTML={{ __html: eventContent.text }}
                    variants={textVariants}
                    animate={{
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="event-direction__call"
                    variants={textVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                  >
                    <motion.div
                      className="event-direction__call-icon"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <motion.img
                        src={eventContent.iconSrc}
                        alt="Chat Icon"
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <motion.div className="event-direction__call-content">
                      <motion.p
                        animate={{
                          x: [0, 2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        {eventContent.callText}
                      </motion.p>
                      <motion.h4
                        whileHover={{
                          scale: 1.05,
                          color: "#ff6b6b",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.a
                          href={`tel:${eventContent.phone}`}
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(255,107,107,0)",
                              "0 0 10px rgba(255,107,107,0.3)",
                              "0 0 0px rgba(255,107,107,0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          {eventContent.callNumber}
                        </motion.a>
                      </motion.h4>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="col-xl-5">
                <motion.div
                  className="event-direction__right"
                  variants={rightContentVariants}
                >
                  <motion.ul
                    className="event-direction__counter list-unstyled"
                    variants={sectionVariants}
                  >
                    {counters.map((counter, index) => (
                      <motion.li
                        key={index}
                        variants={counterVariants}
                        whileHover={{
                          scale: 1.08,
                          y: -5,
                          rotateY: 5,
                          boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                        }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 3 + index * 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: counter.delay,
                        }}
                      >
                        <motion.div className="event-direction__counter-single">
                          <motion.div
                            className="event-direction__counter-box"
                            animate={index % 2 === 0 ? pulseAnimation : {}}
                          >
                            <motion.h3
                              className="odometer"
                              animate={{
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.3,
                              }}
                            >
                              <CountUp
                                start={0}
                                end={counter.end}
                                duration={2}
                                delay={counter.delay}
                              />
                            </motion.h3>
                            <motion.span
                              className="event-direction__counter-plus"
                              animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.4,
                              }}
                            >
                              {counter.suffix}
                            </motion.span>
                          </motion.div>
                          <motion.p
                            className="event-direction__counter-text"
                            animate={{
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 },
                            }}
                          >
                            {counter.text}
                          </motion.p>
                        </motion.div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Event Direction End */}
    </>
  );
}
