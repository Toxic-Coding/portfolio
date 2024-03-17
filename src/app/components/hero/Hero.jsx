"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { description, slideImage, slideUp } from "./animation";
import { motion } from "framer-motion";
import style from "./style.module.scss";
import Magnetic from "@/common/magnetic/Magnetic";
import Button from "@/common/button/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Hero = () => {
  const desc = useRef(null);
  useGSAP(
    (contaxt, contextSafe) => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({ scrollTrigger: {} });
      gsap.to("svg", {
        rotate: 60,
        y: -200,
        scrollTrigger: {
          trigger: "svg",
          scrub: 1,
          start: "clamp(top 40%)",
          ease: "elastic.inOut",
        },
      });
      gsap.to("#anim", {
        y: -100,
        opacity: 0,
        ease: "power3",
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        stagger: {
          each: 0.1,
        },
        scrollTrigger: {
          trigger: "#anim",
          scrub: 1,
          start: "clamp(top 40%)",
          snap: "labels",
        },
      });
      gsap.to("img", {
        scale: 0.2,
        alpha: 0,
        ease: "power3",
        scrollTrigger: {
          trigger: "img",
          start: "clamp(bottom bottom)",
          scrub: 1,
          pin: true,
        },
      });
    },
    { scope: desc }
  );
  return (
    <main ref={desc} className={`${style.hero}`}>
      <div
        className={style.personal_image}
        // data-scroll
        // data-scroll-speed={-0.7}
      >
        <Image
          height={1000}
          width={1000}
          className={style.image}
          src="/assets/adilbg.png"
          alt="hero"
        />
      </div>

      <div className={style.description} data-scroll data-scroll-speed={0.3}>
        <Magnetic>
          <svg
            className="svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
        </Magnetic>
        <p id="anim">Freelance</p>
        <p id="anim">Web Developer</p>
        <Button id="anim" className={style.btn} background={"#0e1f60"}>
          <span>Hire me</span>
        </Button>
      </div>
    </main>
  );
};

export default Hero;
