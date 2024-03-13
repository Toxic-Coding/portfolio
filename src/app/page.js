"use client";
import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import { AnimatePresence } from "framer-motion";
import Preloader from "../common/preloader/Index";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main>
      <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
      <Hero />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        debitis quibusdam sunt accusantium aliquid commodi assumenda ipsum
        quaerat neque architecto et quas, deserunt quod voluptates repudiandae
        tempore exercitationem a doloremque aperiam impedit dicta quisquam. Qui
        sequi eos quod doloribus beatae, quo, nulla reiciendis non molestias
        libero a nam illum facilis eius dicta sunt veniam mollitia cupiditate
        quam voluptatibus maxime quos! Perferendis quaerat omnis nobis sapiente,
        porro fugit, aut exercitationem eius qui cum aliquid eos magnam maxime
        voluptatem nostrum perspiciatis harum neque! Explicabo hic earum ullam
        deserunt aut at, dolorem quae sunt eos ipsa illum repellendus enim ea
        iure dicta!
      </div>{" "}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        debitis quibusdam sunt accusantium aliquid commodi assumenda ipsum
        quaerat neque architecto et quas, deserunt quod voluptates repudiandae
        tempore exercitationem a doloremque aperiam impedit dicta quisquam. Qui
        sequi eos quod doloribus beatae, quo, nulla reiciendis non molestias
        libero a nam illum facilis eius dicta sunt veniam mollitia cupiditate
        quam voluptatibus maxime quos! Perferendis quaerat omnis nobis sapiente,
        porro fugit, aut exercitationem eius qui cum aliquid eos magnam maxime
        voluptatem nostrum perspiciatis harum neque! Explicabo hic earum ullam
        deserunt aut at, dolorem quae sunt eos ipsa illum repellendus enim ea
        iure dicta!
      </div>{" "}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        debitis quibusdam sunt accusantium aliquid commodi assumenda ipsum
        quaerat neque architecto et quas, deserunt quod voluptates repudiandae
        tempore exercitationem a doloremque aperiam impedit dicta quisquam. Qui
        sequi eos quod doloribus beatae, quo, nulla reiciendis non molestias
        libero a nam illum facilis eius dicta sunt veniam mollitia cupiditate
        quam voluptatibus maxime quos! Perferendis quaerat omnis nobis sapiente,
        porro fugit, aut exercitationem eius qui cum aliquid eos magnam maxime
        voluptatem nostrum perspiciatis harum neque! Explicabo hic earum ullam
        deserunt aut at, dolorem quae sunt eos ipsa illum repellendus enim ea
        iure dicta!
      </div>
    </main>
  );
}
