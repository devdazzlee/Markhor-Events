"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Breadcrumb({ breadcrumbTitle, backgroundImage }) {
    const backgroundImageStyle = backgroundImage
        ? `url(${backgroundImage})`
        : `url(/images/backgrounds/page-header-bg-1-1.jpg)`

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    const breadcrumbItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    }

    const backgroundVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
            },
        },
    }

    return (
        <>
            {/*Page Header Start*/}
            <section className="page-header">
                <motion.div
                    className="page-header__bg"
                    style={{
                        backgroundImage: backgroundImageStyle,
                    }}
                    variants={backgroundVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                <div className="container">
                    <motion.div className="page-header__inner" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h2
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                        >
                            {breadcrumbTitle}
                        </motion.h2>
                        <motion.div className="thm-breadcrumb__box" variants={itemVariants}>
                            <motion.ul className="thm-breadcrumb list-unstyled" variants={containerVariants}>
                                <motion.li
                                    variants={breadcrumbItemVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <Link href="/">Home</Link>
                                </motion.li>
                                <motion.li variants={breadcrumbItemVariants}>
                                    <motion.span
                                        className="icon-angle-left"
                                        animate={{
                                            x: [0, 3, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.li>
                                <motion.li
                                    variants={breadcrumbItemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {breadcrumbTitle}
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/*Page Header End*/}
        </>
    )
}
