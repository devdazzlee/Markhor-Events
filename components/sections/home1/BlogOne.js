"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Mock data for demonstration purposes
const blogPosts = [
  {
    id: 1,
    title: "Neon Beach Rave Recap: Karachi's Glow Party",
    image: "https://res.cloudinary.com/dneh5diea/image/upload/v1750072859/Blog3/vkxu82rt3dsguqbksldh.jpg",
    date: "June 5, 2025",
    author: "Markhor Team",
    link: "/blog-details/neon-beach-rave",
  },
  {
    id: 2,
    title: "Top 5 Hidden Rooftop Venues for Nightouts",
    image: "https://res.cloudinary.com/dneh5diea/image/upload/v1750072862/Blog3/l4onx11pbk2sajivcy30.jpg",
    date: "June 10, 2025",
    author: "Markhor Team",
    link: "/blog-details/rooftop-venues",
  },
  {
    id: 3,
    title: "Girls' Night Out Essentials: What to Wear & Bring",
    image: "https://res.cloudinary.com/dneh5diea/image/upload/v1750072858/Blog3/go7ax1xjyatsn5yeoef3.jpg",
    date: "June 15, 2025",
    author: "Markhor Team",
    link: "/blog-details/girls-night-essentials",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
      delay: 0.3,
    },
  },
}

export default function BlogOne() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="blog-one" ref={ref}>
      <div className="container">
        <motion.div className="blog-one__top" initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div className="section-title text-left" variants={titleVariants}>
            <motion.div
              className="section-title__tagline-box"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-title__tagline">Event Buzz & Vibes</span>
            </motion.div>
            <motion.h2
              className="section-title__title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              What's Poppin' in Karachi
            </motion.h2>
          </motion.div>
          <motion.div className="blog-one__btn-box" variants={buttonVariants}>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/blog" className="blog-one__btn thm-btn">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Explore More Stories
                </motion.span>
                <motion.span
                  className="icon-arrow-right"
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="blog-one__bottom"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="row">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="col-xl-4 col-lg-4 col-md-6"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <motion.div
                  className="blog-one__single"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="blog-one__img"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.div
                      className="blog-one__hover"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href={post.link}>
                        <motion.span
                          className="blog-one__hover-icon-1"
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.6 },
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="blog-one__hover-icon-2"></span>
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="blog-one__content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.ul
                      className="blog-one__meta list-unstyled"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    >
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <span className="icon-user"></span>By {post.author}
                      </motion.li>
                      <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <span className="icon-calendar"></span>
                        {post.date}
                      </motion.li>
                    </motion.ul>

                    <motion.h3
                      className="blog-one__title"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    >
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Link href={post.link}>{post.title}</Link>
                      </motion.div>
                    </motion.h3>

                    <motion.div
                      className="blog-one__btn-box-two"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={post.link} className="blog-one__btn thm-btn">
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            Read More
                          </motion.span>
                          <motion.span
                            className="icon-arrow-right"
                            initial={{ x: 0 }}
                            whileHover={{ x: 8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          ></motion.span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
