"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Layout from "@/components/layout/Layout"

export default function ServicesSection() {
  const servicesData = [
    {
      id: 1,
      title: "Eventful Ventures",
      description: "Events bring people together for a shared experience and From weddings",
      link: "event-prodigy",
      icon: "icon-camera",
      wowDelay: "100ms",
    },
    {
      id: 2,
      title: "Stellar Events Co",
      description: "Events bring people together for a shared experience and From weddings",
      link: "stellar-events-co",
      icon: "icon-skewer",
      wowDelay: "200ms",
    },
    {
      id: 3,
      title: "Elite Event Management",
      description: "Events bring people together for a shared experience and From weddings",
      link: "elite-event-management",
      icon: "icon-dinner-table",
      wowDelay: "300ms",
    },
    {
      id: 4,
      title: "Advanced Dental Solutions",
      description: "Events bring people together for a shared experience and From weddings",
      link: "infinite-occasions",
      icon: "icon-cake",
      wowDelay: "400ms",
    },
    {
      id: 5,
      title: "Elite Dental Specialists",
      description: "Events bring people together for a shared experience and From weddings",
      link: "dream-event-planners",
      icon: "icon-dental-specialists",
      wowDelay: "500ms",
    },
    {
      id: 6,
      title: "Modern Cos",
      description: "Events bring people together for a shared experience and From weddings",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
  ]

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

  const iconVariants = {
    animate: {
      y: [0, -8, 0],
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
      rotate: [0, -15, 15, 0],
      y: -12,
      filter: "drop-shadow(0 15px 25px rgba(198, 161, 54, 0.4))",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const titleVariants = {
    hover: {
      scale: 1.05,
      color: "#c6a136",
      textShadow: "0 0 15px rgba(198, 161, 54, 0.5)",
      transition: { duration: 0.3 },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      color: "#c6a136",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
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

 
  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Services"  backgroundImage={"assets/images/backgrounds/page-header-bg-1-1.jpg"} >
    <div>
      {/*Services Page Start*/}
      <motion.section
        className="services-page"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ perspective: "1500px" }}
      >
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div key={service.id} className="col-xl-4 col-lg-4 col-md-6">
                <motion.div
                  className="services-one__single"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -15,
                    rotateX: -8,
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(198, 161, 54, 0.2)",
                    filter: "brightness(1.05)",
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 10px 25px rgba(0,0,0,0.1)",
                      "0 15px 35px rgba(198, 161, 54, 0.15)",
                      "0 10px 25px rgba(0,0,0,0.1)",
                    ],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    },
                  }}
                >
                  <motion.div
                    className="services-one__icon"
                    variants={iconVariants}
                    animate="animate"
                    whileHover="hover"
                    style={{
                      background: "linear-gradient(135deg, #8e7424 0%, #c6a136 50%, #e3c565 100%)",
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                    }}
                  >
                    <motion.span
                      className={service.icon}
                      animate={{
                        color: ["#ffffff", "#f0d77a", "#ffffff"],
                        transition: {
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        },
                      }}
                      style={{
                        color: "#ffffff",
                        fontSize: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></motion.span>
                  </motion.div>
                  <motion.h3
                    className="services-one__title"
                    variants={titleVariants}
                    whileHover="hover"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(0,0,0,0.1)",
                        "0 0 15px rgba(198, 161, 54, 0.3)",
                        "0 0 5px rgba(0,0,0,0.1)",
                      ],
                      transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      },
                    }}
                  >
                    <Link href={service.link}>{service.title}</Link>
                  </motion.h3>
                  <motion.p
                    className="services-one__text"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    animate={{
                      y: [0, -1, 0],
                      transition: {
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      },
                    }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    animate={{
                      x: [0, 3, 0],
                      transition: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                    }}
                  >
                    <Link href={service.link} className="services-one__read-more">
                      Read More{" "}
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
                          delay: index * 0.1,
                        }}
                      ></motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/*Services Page End*/}
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
    </div>
    </Layout>
  )
}
