import React from "react";
import style from "./style.module.scss";
import Text from "@/common/AnimText/Text";
import Arrow from "@/common/arrow/Arrow";
import TextReveal from "@/common/AnimText/TextReveal";
const About = () => {
  const txt =
    "I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.";

  return (
    <section className={style.section} id="about">
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col_outer}>
            <h1>
              <TextReveal text={"Helping brands thrive in the digital world"} />
            </h1>
          </div>
          <div className={style.col_outer}>
            <div className={style.row_inner}>
              <div className={style.col_inner}>
                <Arrow />
                <Text txt={txt} />
              </div>
              <div className={style.col_inner}>
                <div
                  className={style.overlay_image}
                  data-scroll
                  data-scroll-position="top"
                  data-scroll-speed={-0.5}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
