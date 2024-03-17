"use client";
import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import gsap from "gsap";
import Magnetic from "../magnetic/Magnetic";
const Button = ({ children, background, ...attr }) => {
  const circle = useRef(null);
  let timeLine = useRef(null);
  let timeOutId = null;
  useEffect(() => {
    timeLine.current = gsap.timeline({ paused: true });
    timeLine.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);
  const handleMouseEnter = () => {
    if (timeOutId) clearTimeout(timeOutId);
    timeLine.current.tweenFromTo("enter", "exit");
  };
  const handleMouseLeave = () => {
    timeOutId = setTimeout(() => {
      timeLine.current.play();
    }, 300);
  };
  return (
    <Magnetic>
      <div
        className={style.btn}
        style={{ overflow: "hidden" }}
        {...attr}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Magnetic>{children}</Magnetic>
        <div ref={circle} className={style.circle} style={{ background }}></div>
      </div>
    </Magnetic>
  );
};

export default Button;
