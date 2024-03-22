"use client";
import React, { useRef } from "react";
import style from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { slideUp } from "./anim";
import Magnetic from "../magnetic/Magnetic";
const Text = ({ txt, ...attr }) => {
  const splitText = useRef(null);
  const isInView = useInView(splitText);
  return (
    <p className={style.animText} ref={splitText}>
      {txt.split(" ").map((char, i) => {
        return (
          <span key={i} className={style.mask} {...attr}>
            <Magnetic>
              <motion.span
                variants={slideUp}
                custom={i}
                animate={isInView ? "open" : "closed"}
                key={i}
              >
                {char}
              </motion.span>
            </Magnetic>
          </span>
        );
      })}
    </p>
  );
};

export default Text;
