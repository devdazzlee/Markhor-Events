"use client"
import { motion } from "framer-motion"

export default function Breadcrumb3({ backgroundImage }) {
  const backgroundImageStyle = backgroundImage
    ? `url(${backgroundImage})`
    : `url(/images/backgrounds/page-header-bg-1-1.jpg)`

  const sectionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  }

  const backgroundVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const containerVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  }

  const innerVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      rotateX: 10,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {/*Page Header Start*/}
      <motion.section
        className="page-header"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          className="page-header__bg"
          style={{
            backgroundImage: backgroundImageStyle,
          }}
          variants={backgroundVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        ></motion.div>
        <motion.div className="container" variants={containerVariants}>
          <motion.div
            className="page-header__inner"
            variants={innerVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
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
            {/* Content area ready for future additions */}
          </motion.div>
        </motion.div>
      </motion.section>
      {/*Page Header End*/}
    </>
  )
}
