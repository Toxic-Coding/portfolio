"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { description, slideImage, slideUp } from "./animation";
import { motion } from "framer-motion";
import style from "./style.module.scss";
import Magnetic from "@/common/magnetic/Magnetic";
const Hero = () => {
  return (
    <motion.main
      className={`${style.hero}`}
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <div
        className={style.personal_image}
        data-scroll
        data-scroll-speed={-0.7}
      >
        <Image
          height={1000}
          width={1000}
          className={style.image}
          src="/assets/hero.jpg"
        />
      </div>

      <div className={style.description} data-scroll data-scroll-speed={0.7}>
        <Magnetic>
          <svg
            data-scroll
            data-scroll-speed={0.8}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
        </Magnetic>
        <motion.p data-scroll data-scroll-speed={0.8} animate={"enter"} initial={"initial"} variants={description}>
          Freelance
        </motion.p>
        <motion.p
          animate={"enter"}
          initial={"initial"}
          variants={description}
          transition={{ delay: 0.5 }}
        >
          Web Developer
        </motion.p>
      </div>
    </motion.main>
  );
};

export default Hero;
