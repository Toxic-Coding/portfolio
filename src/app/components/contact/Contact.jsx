import React from "react";
import style from "./style.module.scss";
import CForm from "./Form";
import Text from "@/common/AnimText/Text";
import Arrow from "@/common/arrow/Arrow";
const Contact = () => {
  return (
    <>
      <section className={style.contact} id="contact">
        <div className={style.container}>
          <div className={style.row}>
            <div
              className={style.heading}
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={0.1}
            >
              <Arrow />
              <h1>
                <Text txt={"Let's start a project together"} />
              </h1>
            </div>
            <div className={style.col}>
              <CForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
