"use client"

import { motion } from "framer-motion"

export default function SlidingText() {
  const texts = ["Party Time", "Good Vibes", "Dance Now", "Girls Night", "Fun Beats", "Music Love"]

  // Repeat sufficiently for smooth loop
  const repeatedTexts = [...texts, ...texts]

  return (
    <motion.section
      className="sliding-text-one"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="sliding-text-one__wrap">
        <motion.ul
          className="sliding-text__list marquee_mode"
          animate={{
            x: [0, -50 * texts.length + "%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {repeatedTexts.map((text, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3 },
              }}
              animate={{
                y: [0, -5, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <motion.h2
                data-hover={text}
                className="sliding-text__title"
                whileHover={{
                  textShadow: "0 0 30px rgba(0,0,0,0.5)",
                  filter: "brightness(1.2)",
                  transition: { duration: 0.2 },
                }}
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
                  delay: index * 0.1,
                }}
              >
                {text}
                <motion.img
                  src="assets/images/icon/star-icon.png"
                  alt="Star Icon"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.5,
                    rotate: [0, 180, 360],
                    transition: { duration: 0.5 },
                  }}
                />
              </motion.h2>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  )
}
