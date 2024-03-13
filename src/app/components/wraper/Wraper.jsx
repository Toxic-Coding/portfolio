"use client";
import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
const Wraper = ({ children }) => {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      content: document.documentElement,
      lerp: 0.1,
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
  });
  return <div>{children}</div>;
};

export default Wraper;
