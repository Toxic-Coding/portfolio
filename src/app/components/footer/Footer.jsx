import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Text from "@/common/AnimText/Text";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.version}>
              <h5>VERSION</h5>
              <span>2024 © Edition</span>
            </div>
          </div>
          <div className={style.col}>
            <ul>
              <li>
                <Link href="mailto:drcadil388@gmail.com">
                  <Text txt={"drcadil388@gmail.com"} />
                </Link>
              </li>
              <li>
                <Link href="tel:+923207515030">
                  <Text txt={"+92 320 7515 030"} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
