"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import data from "./data.json";
import style from "./style.module.scss";
import { slideUp } from "./anim";
import TextReveal from "@/common/AnimText/TextReveal";
const Services = () => {
  const rowRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(rowRef);

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col}>
            <h2 ref={textRef}>
              <TextReveal text={"I can help you with"} />
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1] }}
                    transition={{
                      ease: "linear",
                      duration: 2,
                      delay: 0.2 * i,
                      repeat: Infinity,
                    }}
                    key={i}
                  >
                    .
                  </motion.span>
                );
              })}
            </h2>
          </div>
          <div
            className={style.col}
            data-scroll
            data-scroll-speed={0.1}
            ref={rowRef}
          >
            {data.map((item, i) => {
              return (
                <motion.div
                  className={style.card}
                  variants={slideUp}
                  custom={i}
                  animate={isInView ? "open" : "closed"}
                  key={i}
                >
                  <h5>0{i + 1}</h5>
                  <span className={style.stripe}></span>
                  <div className={style.card_body}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
