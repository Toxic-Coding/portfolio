"use client";
import * as React from "react";
import { SplitText } from "@rigo-m/react-split-text";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LetterWrapper = ({ children, countIndex }) => {
  const char = React.useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // let tl = gsap.timeline();
    gsap.from(char.current, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      delay: 0.01 * countIndex,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "bounce.Out",
      stagger: 0.01,
      scrollTrigger: {
        trigger: char.current,
        // start: "clamp(top 100%)",
        // end: "clamp(top 20%)",
        // scrub:1
        toggleActions: "restart reset restart reverse",
      },
    });
  });
  return (
    <div ref={char} style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0 }}>{children}</span>
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {children}
      </span>
    </div>
  );
};
const MemoizedLetterWrapper = React.memo(LetterWrapper);

export const Split = ({ text }) => {
  return <SplitText LetterWrapper={MemoizedLetterWrapper}>{text}</SplitText>;
};
