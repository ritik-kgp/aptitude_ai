"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About AptitudeAI" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Aptitude AI</span>{" "}
        revolutionizes the educational landscape by offering students a
        personalized AI assistant capable of providing instant, accurate
        assistance with coursework and queries. Designed to engage and{" "}
        <span className="font-extrabold text-white">support learners 24/7</span>{" "}
        through intuitive speech and text interactions, AptitudeAI adapts to
        individual learning styles and needs, fostering a stimulating
        educational environment beyond the classroom. Leveraging cutting-edge AI
        and{" "}
        <span className="font-extrabold text-white">
          natural language processing technologies,
        </span>{" "}
        it promises a
        seamless learning experience across all devices, enhancing student
        engagement and comprehension.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
