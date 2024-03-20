"use client";
import { useEffect, useRef } from "react";
const useScrollTo = () => {
  const locoMotive = useRef(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      locoMotive.current = locomotiveScroll;
    })();
  }, []);

  const scrollTo = (target) => {
    locoMotive.current.scrollTo(target, {
      offset: 0,
      duration: 3,
      disableLerp: true,
    });
  };
  return { scrollTo };
};

export default useScrollTo;
