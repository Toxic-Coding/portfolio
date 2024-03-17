"use client";
import React, { useRef } from "react";
import "./style.scss";
import { Split } from "./Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {
  const section = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      section.current,
      { scale: 0.5, alpha: 0 },
      {
        scale: 1,
        alpha: 1,
        scrollTrigger: {
          trigger: section.current,
          // scrub: 1,
          // start: "clamp(top bottom)",
          // end: "clamp(bottom bottom)",
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  });
  return (
    <section ref={section}>
      <div className="container mx-auto lg:px-20 py-10">
        <div className="row flex max-md:flex-col md:items-start items-center justify-center max-sm:px-2">
          <div className="col md:w-1/3 w-full lg:px-5 py-2 max-md:mb-4">
            <Split text="I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first." />
          </div>
          <div className="col overflow-hidden md:w-2/3 w-full">
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
