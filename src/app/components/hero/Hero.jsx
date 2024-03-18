"use client";
import React, { useRef } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import Magnetic from "@/common/magnetic/Magnetic";
import Button from "@/common/button/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Hero = () => {
  const desc = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      const tl = gsap.timeline();
      mm.add("(min-width:650px)", () => {
        tl.to("svg", {
          rotate: 60,
          y: -200,
          scrollTrigger: {
            trigger: "svg",
            scrub: 1,
            start: "clamp(top 40%)",
            ease: "elastic.inOut",
          },
        }).to("img", {
          rotate: 95,
          y: -1000,
          ease: "elastic",
          scrollTrigger: {
            trigger: "img",
            start: "clamp(top 40%)",
            end: "+=2000",
            scrub: 1,
          },
        });
        gsap.to("#anim", {
          y: -100,
          opacity: 0,
          ease: "power3.in",
          stagger: {
            each: 0.1,
          },
          scrollTrigger: {
            trigger: "#anim",
            start: "clamp(top 40%)",
            end: "+=2000",
            toggleActions: "restart pause reverse reverse",
          },
        });
      });
      mm.add("(max-width:650px)", () => {
        gsap.to("[data-common]", {
          alpha: 0,
          y: -100,
          ease: "power2",
          stagger: {
            each: 0.1,
          },
          scrollTrigger: {
            trigger: "[data-common]",
            start: "clamp(top 10%)",
            scrub: 1,
          },
        });
      });
      function mouseMoveFunc(e) {
        const depth = 10;
        const moveX = (e.pageX - window.innerWidth / 2) / depth;
        const moveY = (e.pageY - window.innerHeight / 2) / depth;
        gsap.to("[data-description]", {
          duration: 1,
          x: moveX,
          y: moveY,
          ease: "slow",
          stagger: 0.008,
          overwrite: true,
        });
      }
      document.addEventListener("mousemove", mouseMoveFunc);
      return () => {
        document.removeEventListener("mousemove", mouseMoveFunc);
      };
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
          src="/assets/herosvg.svg"
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
          onClick={() => alert("click working!")}
        >
          <span>Hire me</span>
        </Button>
      </div>
    </main>
  );
};

export default Hero;
