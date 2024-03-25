"use client";
import React, { useRef } from "react";
import style from "./style.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TextReveal = ({ text }) => {
  const elm = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("[data-reveal-char]", {
        backgroundPositionX: "0%",
        stagger: 1,
        ease:"power3",
        scrollTrigger: {
          trigger: elm.current,
          scrub: 1,
          start: "top 90%",
          end: "top 5%",
        },
      });
    },
    { scope: elm }
  );
  const words = text.split(" ");
  return (
    <p ref={elm} className={style.revealContainer}>
      {words.map((word, i) => {
        return <Word key={i}>{word}</Word>;
      })}
    </p>
  );
};

const Word = ({ children }) => {
  const char = children.split("");
  return (
    <span className={style.revealWord}>
      {char.map((chr, i) => {
        return (
          <span key={i}>
            <Character>{chr}</Character>
          </span>
        );
      })}
    </span>
  );
};

const Character = ({ children }) => {
  return (
    <span data-reveal-char className={style.revealChr}>
      {children}
    </span>
  );
};
export default TextReveal;
