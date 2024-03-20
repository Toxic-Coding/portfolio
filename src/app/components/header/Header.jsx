import CLink from "@/common/Link/Link";
import Magnetic from "@/common/magnetic/Magnetic";
import Link from "next/link";
import React from "react";
import "./style.scss";
import Image from "next/image";
const Header = ({ color }) => {
  return (
    <>
      <nav
        className="w-full absolute top-0 left-0 text-white z-10"
        data-scroll
        data-scroll-speed={0.3}
        data-scroll-position="top"
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto py-5 sm:px-10 px-3 relative">
          <Magnetic>
            <Link
              href="/"
              className={`logo flex items-center space-x-3 text-${color} rtl:space-x-reverse overflow-hidden relative`}
            >
              <span className="copyright">©</span>
              <div className="name self-center text-sm  font-medium whitespace-nowrap flex relative overflow-hidden">
                <span className="code-by">Code by</span>
                <span className="muhammad">Muhammad</span>
                <span className="adil">Adil</span>
              </div>
            </Link>
          </Magnetic>
          <CLink
            to={"https://www.linkedin.com/in/muhammad-adil-462624236"}
            target="_blank"
          >
            <Image
              src={"/linkedin.png"}
              alt="linkedin"
              width={30}
              height={30}
              className="rounded-lg object-cover"
            />
          </CLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
