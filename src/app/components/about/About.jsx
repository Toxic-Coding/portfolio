"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { slideUp } from "./anim";
import Magnetic from "@/common/magnetic/Magnetic";
import "./style.scss";
const About = () => {
  const txt =
    "I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.";
  const description = useRef(null);
  const image = useRef(null);
  const isInView = useInView(description);
  return (
    <section>
      <div className="container mx-auto lg:px-10 py-10">
        <div className="row flex max-md:flex-col md:items-start items-center justify-center max-sm:px-2">
          <div
            className="col md:w-2/4 w-full px-2 py-2 max-md:mb-4"
            ref={description}
          >
            <p className="m-0">
              {txt.split(" ").map((char, i) => {
                return (
                  <span key={i} className="mask me-1">
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
          </div>
          <div className="col overflow-hidden md:w-2/5 w-full">
            <div
              className="overlay-image "
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={-0.5}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
