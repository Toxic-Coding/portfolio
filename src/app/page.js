"use client";
import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import { AnimatePresence } from "framer-motion";
import Preloader from "../common/preloader/Index";
import About from "./components/about/About";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      // setTimeout(() => {
      //   // setIsLoading(false);
      //   document.body.style.cursor = "default";
      //   window.scrollTo(0, 0);
      // }, 2000);
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
        className="bgEffect max-sm:hidden"
        // onMouseMove={mouseMove}
        style={{
          background: `radial-gradient(
      circle at ${pos.x} ${pos.y},
      transparent 10%,
      rgba(0, 0, 0, 0.7) 20%
    )`,
        }}
      ></div>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <Hero />
      <About />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi qui
        quaerat eaque recusandae soluta expedita deleniti nostrum tempore
        aliquam quam vero, fuga tenetur quidem perspiciatis cumque aliquid
        dolore odit mollitia aspernatur laboriosam praesentium. Inventore earum
        quos ratione sint molestias dignissimos voluptatibus modi minima rem
        ipsa error quasi, nesciunt non ipsum eveniet voluptates quibusdam
        pariatur et corrupti labore nostrum. Commodi enim odit quis accusantium
        tempora, illo veniam itaque doloremque. Voluptatum itaque dolore autem
        impedit eveniet quaerat dolorum alias reprehenderit doloremque earum
        vitae sed nemo aliquam, eius voluptas tempore consequuntur quos? Quo
        voluptatibus ea numquam nam inventore iusto eos! Repudiandae, veniam.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi qui
        quaerat eaque recusandae soluta expedita deleniti nostrum tempore
        aliquam quam vero, fuga tenetur quidem perspiciatis cumque aliquid
        dolore odit mollitia aspernatur laboriosam praesentium. Inventore earum
        quos ratione sint molestias dignissimos voluptatibus modi minima rem
        ipsa error quasi, nesciunt non ipsum eveniet voluptates quibusdam
        pariatur et corrupti labore nostrum. Commodi enim odit quis accusantium
        tempora, illo veniam itaque doloremque. Voluptatum itaque dolore autem
        impedit eveniet quaerat dolorum alias reprehenderit doloremque earum
        vitae sed nemo aliquam, eius voluptas tempore consequuntur quos? Quo
        voluptatibus ea numquam nam inventore iusto eos! Repudiandae, veniam.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi qui
        quaerat eaque recusandae soluta expedita deleniti nostrum tempore
        aliquam quam vero, fuga tenetur quidem perspiciatis cumque aliquid
        dolore odit mollitia aspernatur laboriosam praesentium. Inventore earum
        quos ratione sint molestias dignissimos voluptatibus modi minima rem
        ipsa error quasi, nesciunt non ipsum eveniet voluptates quibusdam
        pariatur et corrupti labore nostrum. Commodi enim odit quis accusantium
        tempora, illo veniam itaque doloremque. Voluptatum itaque dolore autem
        impedit eveniet quaerat dolorum alias reprehenderit doloremque earum
        vitae sed nemo aliquam, eius voluptas tempore consequuntur quos? Quo
        voluptatibus ea numquam nam inventore iusto eos! Repudiandae, veniam.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi qui
        quaerat eaque recusandae soluta expedita deleniti nostrum tempore
        aliquam quam vero, fuga tenetur quidem perspiciatis cumque aliquid
        dolore odit mollitia aspernatur laboriosam praesentium. Inventore earum
        quos ratione sint molestias dignissimos voluptatibus modi minima rem
        ipsa error quasi, nesciunt non ipsum eveniet voluptates quibusdam
        pariatur et corrupti labore nostrum. Commodi enim odit quis accusantium
        tempora, illo veniam itaque doloremque. Voluptatum itaque dolore autem
        impedit eveniet quaerat dolorum alias reprehenderit doloremque earum
        vitae sed nemo aliquam, eius voluptas tempore consequuntur quos? Quo
        voluptatibus ea numquam nam inventore iusto eos! Repudiandae, veniam.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi qui
        quaerat eaque recusandae soluta expedita deleniti nostrum tempore
        aliquam quam vero, fuga tenetur quidem perspiciatis cumque aliquid
        dolore odit mollitia aspernatur laboriosam praesentium. Inventore earum
        quos ratione sint molestias dignissimos voluptatibus modi minima rem
        ipsa error quasi, nesciunt non ipsum eveniet voluptates quibusdam
        pariatur et corrupti labore nostrum. Commodi enim odit quis accusantium
        tempora, illo veniam itaque doloremque. Voluptatum itaque dolore autem
        impedit eveniet quaerat dolorum alias reprehenderit doloremque earum
        vitae sed nemo aliquam, eius voluptas tempore consequuntur quos? Quo
        voluptatibus ea numquam nam inventore iusto eos! Repudiandae, veniam.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi qui
        quaerat eaque recusandae soluta expedita deleniti nostrum tempore
        aliquam quam vero, fuga tenetur quidem perspiciatis cumque aliquid
        dolore odit mollitia aspernatur laboriosam praesentium. Inventore earum
        quos ratione sint molestias dignissimos voluptatibus modi minima rem
        ipsa error quasi, nesciunt non ipsum eveniet voluptates quibusdam
        pariatur et corrupti labore nostrum. Commodi enim odit quis accusantium
        tempora, illo veniam itaque doloremque. Voluptatum itaque dolore autem
        impedit eveniet quaerat dolorum alias reprehenderit doloremque earum
        vitae sed nemo aliquam, eius voluptas tempore consequuntur quos? Quo
        voluptatibus ea numquam nam inventore iusto eos! Repudiandae, veniam.
      </p>
    </main>
  );
}
