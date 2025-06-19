"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const ScheduleOne = () => {
  const [activeTab, setActiveTab] = useState("1st-day")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

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
  }

  const tabVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      scale: 0.95,
      transition: { duration: 0.4 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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
  }

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <motion.section
      className="schedule-one"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div className="schedule-one__inner">
          <motion.div className="section-title text-left" variants={titleVariants}>
            <motion.div
              className="section-title__tagline-box"
              whileHover={{
                scale: 1.1,
                rotate: [0, -2, 2, 0],
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
                Party Schedule
              </motion.span>
            </motion.div>
            <motion.h2
              className="section-title__title"
              whileHover={{
                scale: 1.03,
                y: -5,
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
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Your Ultimate Party Lineup
            </motion.h2>
          </motion.div>

          <motion.div className="schedule-one__main-tab-box tabs-box" variants={sectionVariants}>
            <motion.ul className="tab-buttons clearfix list-unstyled" variants={sectionVariants}>
              {[
                { key: "1st-day", day: "Day 01", date: "16 April 2024", delay: 0 },
                { key: "2nd-day", day: "Day 02", date: "18 April 2024", delay: 0.5 },
                { key: "3rd-day", day: "Day 03", date: "24 April 2024", delay: 1 },
              ].map(({ key, day, date, delay }) => (
                <motion.li
                  key={key}
                  className={`tab-btn ${activeTab === key ? "active-btn" : ""}`}
                  onClick={() => handleTabClick(key)}
                  variants={tabVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    rotateY: 5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotateY: -2,
                    transition: { duration: 0.1 },
                  }}
                  animate={activeTab === key ? pulseAnimation : {}}
                >
                  <motion.h3
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay,
                    }}
                  >
                    {day}
                  </motion.h3>
                  <motion.p
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: delay + 0.3,
                    }}
                  >
                    {date}
                  </motion.p>
                </motion.li>
              ))}
            </motion.ul>

            <div className="tabs-content">
              <AnimatePresence mode="wait">
                {activeTab === "1st-day" && (
                  <motion.div
                    className={`tab ${activeTab === "1st-day" ? "active-tab" : ""}`}
                    id="1st-day"
                    key="1st-day"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.div className="schedule-one__tab-content-box" variants={sectionVariants}>
                      {[
                        {
                          title: "Glow Dance Party",
                          description: "Hit the dance floor with neon lights and thumping beats.",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072590/Blog2/tivda27sr6dmvo4shzrm.jpg",
                          time: "8 PM – 2 AM",
                          location: "Clifton Beach, Karachi",
                          delay: 0,
                        },
                        {
                          title: "Beach Selfie Spot",
                          description: "Capture your best looks at our neon selfie booths by the shore.",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072549/Blog2/gmnftfv9o6za7svl487o.jpg",
                          time: "8 PM – 2 AM",
                          location: "Clifton Beach, Karachi",
                          delay: 0.5,
                        },
                        {
                          title: "Girls' Night Carnival",
                          description: "Sip pink cocktails, snap fun pics, and party with your squad.",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072793/Blog2/nclhrv7hgeimsmsk4kyy.jpg",
                          time: "8 PM – 2 AM",
                          location: "Clifton Beach, Karachi",
                          delay: 1,
                        },
                      ].map((event, index) => (
                        <motion.div
                          key={index}
                          className="schedule-one__single"
                          variants={cardVariants}
                          whileHover={{
                            y: -12,
                            scale: 1.02,
                            rotateY: 2,
                            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
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
                            duration: 4 + index * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: event.delay,
                          }}
                        >
                          <motion.div className="schedule-one__left">
                            <motion.h3
                              className="schedule-one__title"
                              whileHover={{
                                scale: 1.05,
                                x: 5,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                },
                              }}
                            >
                              <Link href="/event-details">{event.title}</Link>
                            </motion.h3>
                            <motion.p
                              className="schedule-one__text"
                              animate={{
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.3,
                              }}
                            >
                              {event.description}
                            </motion.p>
                          </motion.div>

                          <motion.div
                            className="schedule-one__img"
                            whileHover={{
                              scale: 1.1,
                              rotate: 2,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              },
                            }}
                          >
                            <motion.img
                              src={event.image}
                              alt={event.title}
                              animate={{
                                y: [0, -4, 0],
                                rotate: [0, 1, -1, 0],
                              }}
                              transition={{
                                duration: 5 + index * 0.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: event.delay,
                              }}
                              whileHover={{
                                scale: 1.05,
                                brightness: 1.1,
                              }}
                            />
                          </motion.div>

                          <motion.div className="schedule-one__address-and-btn-box">
                            <motion.ul className="list-unstyled schedule-one__address">
                              <motion.li
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <motion.div
                                  className="icon"
                                  animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                  }}
                                >
                                  <span className="icon-clock"></span>
                                </motion.div>
                                <div className="text">
                                  <p>{event.time}</p>
                                </div>
                              </motion.li>
                              <motion.li
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <motion.div
                                  className="icon"
                                  animate={{
                                    y: [0, -3, 0],
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: index * 0.3 + 0.5,
                                  }}
                                >
                                  <span className="icon-pin"></span>
                                </motion.div>
                                <div className="text">
                                  <p>{event.location}</p>
                                </div>
                              </motion.li>
                            </motion.ul>

                            <motion.div className="schedule-one__btn-box">
                              <motion.div
                                whileHover={{
                                  scale: 1.1,
                                  y: -3,
                                  rotateX: 5,
                                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                                whileTap={{
                                  scale: 0.95,
                                  y: 0,
                                  transition: { duration: 0.1 },
                                }}
                              >
                                <Link href="/contact" className="schedule-one__btn thm-btn">
                                  <motion.span
                                    animate={{
                                      x: [0, 2, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    Buy Ticket
                                  </motion.span>
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
                                      delay: index * 0.2,
                                    }}
                                  ></motion.span>
                                </Link>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "2nd-day" && (
                  <motion.div
                    className={`tab ${activeTab === "2nd-day" ? "active-tab" : ""}`}
                    id="2nd-day"
                    key="2nd-day"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.div className="schedule-one__tab-content-box" variants={sectionVariants}>
                      {[
                        {
                          title: "Events That Leave a Impression",
                          description:
                            "A personal portfolio is a curated collection of an individual's professional work",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072586/Blog2/uhdoh45pcq9xunoqzkpu.jpg",
                          time: "10 Am To 10 Pm 20 April 2024",
                          location: "Mirpur 01 Road N 12 Dhaka Bangladesh",
                          delay: 0,
                        },
                        {
                          title: "Sparkle & Shine on Celebrations",
                          description:
                            "A personal portfolio is a curated collection of an individual's professional work",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072556/Blog2/yyfznzpktg3zz4pgmk2l.jpg",
                          time: "10 Am To 10 Pm 20 April 2024",
                          location: "Mirpur 01 Road N 12 Dhaka Bangladesh",
                          delay: 0.5,
                        },
                        {
                          title: "Sparkle & Shine Events",
                          description:
                            "A personal portfolio is a curated collection of an individual's professional work",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072615/Blog2/fpyfuyzfj7iu7f8f7vj4.jpg",
                          time: "10 Am To 10 Pm 20 April 2024",
                          location: "Mirpur 01 Road N 12 Dhaka Bangladesh",
                          delay: 1,
                        },
                      ].map((event, index) => (
                        <motion.div
                          key={index}
                          className="schedule-one__single"
                          variants={cardVariants}
                          whileHover={{
                            y: -12,
                            scale: 1.02,
                            rotateY: 2,
                            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
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
                            duration: 4 + index * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: event.delay,
                          }}
                        >
                          <motion.div className="schedule-one__left">
                            <motion.h3
                              className="schedule-one__title"
                              whileHover={{
                                scale: 1.05,
                                x: 5,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                },
                              }}
                            >
                              <Link href="/event-details">{event.title}</Link>
                            </motion.h3>
                            <motion.p
                              className="schedule-one__text"
                              animate={{
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.3,
                              }}
                            >
                              {event.description}
                            </motion.p>
                          </motion.div>

                          <motion.div
                            className="schedule-one__img"
                            whileHover={{
                              scale: 1.1,
                              rotate: 2,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              },
                            }}
                          >
                            <motion.img
                              src={event.image}
                              alt={event.title}
                              animate={{
                                y: [0, -4, 0],
                                rotate: [0, 1, -1, 0],
                              }}
                              transition={{
                                duration: 5 + index * 0.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: event.delay,
                              }}
                            />
                          </motion.div>

                          <motion.div className="schedule-one__address-and-btn-box">
                            <motion.ul className="list-unstyled schedule-one__address">
                              <motion.li
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <motion.div
                                  className="icon"
                                  animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                  }}
                                >
                                  <span className="icon-clock"></span>
                                </motion.div>
                                <div className="text">
                                  <p>{event.time}</p>
                                </div>
                              </motion.li>
                              <motion.li
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <motion.div
                                  className="icon"
                                  animate={{
                                    y: [0, -3, 0],
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: index * 0.3 + 0.5,
                                  }}
                                >
                                  <span className="icon-pin"></span>
                                </motion.div>
                                <div className="text">
                                  <p>{event.location}</p>
                                </div>
                              </motion.li>
                            </motion.ul>

                            <motion.div className="schedule-one__btn-box">
                              <motion.div
                                whileHover={{
                                  scale: 1.1,
                                  y: -3,
                                  rotateX: 5,
                                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                                whileTap={{
                                  scale: 0.95,
                                  y: 0,
                                  transition: { duration: 0.1 },
                                }}
                              >
                                <Link href="/contact" className="schedule-one__btn thm-btn">
                                  <motion.span
                                    animate={{
                                      x: [0, 2, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    Buy Ticket
                                  </motion.span>
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
                                      delay: index * 0.2,
                                    }}
                                  ></motion.span>
                                </Link>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "3rd-day" && (
                  <motion.div
                    className={`tab ${activeTab === "3rd-day" ? "active-tab" : ""}`}
                    id="3rd-day"
                    key="3rd-day"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.div className="schedule-one__tab-content-box" variants={sectionVariants}>
                      {[
                        {
                          title: "Glow Dance Party",
                          description: "Hit the dance floor with neon lights and thumping beats.",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072799/Blog2/tzcght1vovrmq2xqrzf2.jpg",
                          time: "8 PM – 2 AM",
                          location: "Clifton Beach, Karachi",
                          delay: 0,
                        },
                        {
                          title: "Pop Princess Parade",
                          description: "Strut your style on our neon catwalk—feel like royalty.",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072586/Blog2/beyd9p37wtliaabp38px.jpg",
                          time: "8 PM – 2 AM",
                          location: "8 PM – 2 AM",
                          delay: 0.5,
                        },
                        {
                          title: "Glow Paint War",
                          description: "Team up and throw glow paint for an epic color fight.",
                          image:
                            "https://res.cloudinary.com/dneh5diea/image/upload/v1750072583/Blog2/ikdtggtf2ecvhdfxufbh.jpg",
                          time: "8 PM – 2 AM",
                          location: "Clifton Beach, Karachi",
                          delay: 1,
                        },
                      ].map((event, index) => (
                        <motion.div
                          key={index}
                          className="schedule-one__single"
                          variants={cardVariants}
                          whileHover={{
                            y: -12,
                            scale: 1.02,
                            rotateY: 2,
                            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
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
                            duration: 4 + index * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: event.delay,
                          }}
                        >
                          <motion.div className="schedule-one__left">
                            <motion.h3
                              className="schedule-one__title"
                              whileHover={{
                                scale: 1.05,
                                x: 5,
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 10,
                                },
                              }}
                            >
                              <Link href="/event-details">{event.title}</Link>
                            </motion.h3>
                            <motion.p
                              className="schedule-one__text"
                              animate={{
                                opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.3,
                              }}
                            >
                              {event.description}
                            </motion.p>
                          </motion.div>

                          <motion.div
                            className="schedule-one__img"
                            whileHover={{
                              scale: 1.1,
                              rotate: 2,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              },
                            }}
                          >
                            <motion.img
                              src={event.image}
                              alt={event.title}
                              animate={{
                                y: [0, -4, 0],
                                rotate: [0, 1, -1, 0],
                              }}
                              transition={{
                                duration: 5 + index * 0.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: event.delay,
                              }}
                            />
                          </motion.div>

                          <motion.div className="schedule-one__address-and-btn-box">
                            <motion.ul className="list-unstyled schedule-one__address">
                              <motion.li
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <motion.div
                                  className="icon"
                                  animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: index * 0.2,
                                  }}
                                >
                                  <span className="icon-clock"></span>
                                </motion.div>
                                <div className="text">
                                  <p>{event.time}</p>
                                </div>
                              </motion.li>
                              <motion.li
                                whileHover={{
                                  x: 8,
                                  scale: 1.02,
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                              >
                                <motion.div
                                  className="icon"
                                  animate={{
                                    y: [0, -3, 0],
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 2.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: index * 0.3 + 0.5,
                                  }}
                                >
                                  <span className="icon-pin"></span>
                                </motion.div>
                                <div className="text">
                                  <p>{event.location}</p>
                                </div>
                              </motion.li>
                            </motion.ul>

                            <motion.div className="schedule-one__btn-box">
                              <motion.div
                                whileHover={{
                                  scale: 1.1,
                                  y: -3,
                                  rotateX: 5,
                                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                                  transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                  },
                                }}
                                whileTap={{
                                  scale: 0.95,
                                  y: 0,
                                  transition: { duration: 0.1 },
                                }}
                              >
                                <Link href="/contact" className="schedule-one__btn thm-btn">
                                  <motion.span
                                    animate={{
                                      x: [0, 2, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    Buy Ticket
                                  </motion.span>
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
                                      delay: index * 0.2,
                                    }}
                                  ></motion.span>
                                </Link>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScheduleOne
