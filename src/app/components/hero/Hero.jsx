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
import Arrow from "@/common/arrow/Arrow";
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
        <Arrow/>
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
