import React from "react";
import Magnetic from "@/common/magnetic/Magnetic";
import style from "./style.module.scss";
import Text from "@/common/AnimText/Text";
const About = () => {
  const txt =
    "I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.";

  return (
    <section className={style.about} id="about">
      <div className={`${style.container} mx-auto lg:px-10 py-10`}>
        <div
          className={`${style.row} flex max-md:flex-col md:items-start items-center justify-center max-sm:px-2`}
        >
          <div className={`${style.col} md:w-2/4 w-full px-2 py-2 max-md:mb-4`}>
            <Text txt={txt} />
          </div>
          <div className={`${style.col} overflow-hidden md:w-2/5 w-full`}>
            <div
              className={style.overlay_image}
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
