"use client";
import { motion } from "framer-motion";

export default function CTAOne() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
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
  };
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
  };
  return (
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
              <motion.button type="submit" className="cta-one__btn">
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
  );
}
