"use client";
import React, { useRef } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Magnetic from "@/common/magnetic/Magnetic";
import Button from "@/common/button/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateOnDesktop, animateOnMobile } from "./animation";
import useScrollTo from "@/common/scrollto/ScrollTo";
const Hero = () => {
  const desc = useRef(null);
  const { scrollTo } = useScrollTo();
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      const tl = gsap.timeline();
      mm.add("(min-width:650px)", () => {
        animateOnDesktop();
      });
      mm.add("(max-width:650px)", () => {
        animateOnMobile();
      });
    },

    { scope: desc }
  );

  return (
    <main ref={desc} className={`${style.hero}`}>
      <div
        className={style.personal_image}
        data-scroll
        data-scroll-position="top"
        data-scroll-speed={0.7}
      >
        {/* <Magnetic> */}
        <Image
          height={1000}
          width={1000}
          data-common
          className={style.image}
          src="/assets/hero.svg"
          alt="hero"
        />
        {/* </Magnetic> */}
      </div>
      <div
        className={style.description}
        data-description
        data-scroll
        data-scroll-speed={0.3}
      >
        <Magnetic>
          <svg
            className="svg"
            data-common
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
        <p data-common id="anim">
          Freelance
        </p>
        <p data-common id="anim">
          Web Developer
        </p>
        <Button
          data-common
          id="anim"
          className={style.btn}
          background={"#62b0e9"}
          onClick={() => scrollTo("#contact")}
        >
          <span>Hire me</span>
        </Button>
      </div>
    </main>
  );
};

export default Hero;
