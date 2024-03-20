import Magnetic from "@/common/magnetic/Magnetic";
import React from "react";
import style from "./style.module.scss";
import Form from "./Form";
import Text from "@/common/AnimText/Text";
const Contact = () => {
  return (
    <>
      <section className={style.contact} id="contact">
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.heading}>
              <h1>
                <Text txt={"Let's start a project together"} />
              </h1>
            </div>
            <div className={style.col}>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
