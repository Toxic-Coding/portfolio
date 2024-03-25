"use client";
import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import { AnimatePresence } from "framer-motion";
import Preloader from "../common/preloader/Index";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import LinkEdin from "@/common/Linkedin/LinkEdin";
import Services from "./components/services/Services";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          smoothTouch: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          normalizeWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
    const handleMouseMove = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      setPos({ x, y });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main data-scroll-container>
      <div
        className="bgEffect hidden"
        style={{
          background: `radial-gradient(
      circle at ${pos.x} ${pos.y},
      transparent 15%,
      rgba(0, 0, 0, 0.3) 20%
    )`,
        }}
      ></div>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <Hero />
      <About />
      <Services />
      <Contact />
      <LinkEdin />
    </main>
  );
}
