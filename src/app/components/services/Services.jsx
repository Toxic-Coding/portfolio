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
                <Card
                  key={i}
                  title={item.title}
                  description={item.description}
                  isInView={isInView}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description, isInView, index }) => {
  return (
    <motion.div
      className={style.card}
      variants={slideUp}
      custom={index}
      animate={isInView ? "open" : "closed"}
    >
      <h5>0{index + 1}</h5>
      <span className={style.stripe}></span>
      <div className={style.card_body}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default Services;
