import gsap from "gsap";

export const animateOnDesktop = () => {
  const tl = gsap.timeline();
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
};

export const animateOnMobile = () => {
  gsap.to("[data-common]", {
    alpha: 0,
    y: -100,
    ease: "none",
    duration: 0.6,
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: "[data-common]",
      start: "clamp(top 10%)",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 0.3, max: 2 },
        ease: "power3",
      },
    },
  });
};
