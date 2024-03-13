import CLink from "@/common/Link/Link";
import Magnetic from "@/common/magnetic/Magnetic";
import Link from "next/link";
import React from "react";
import "./style.scss"
const Header = ({ color }) => {
  return (
    <>
      <nav className="w-full absolute top-0 left-0 text-white z-10">
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
          <button className="border-none outline-none md:hidden inline-flex items-center justify-between gap-2">
            <span className="block w-2 h-2 rounded-full bg-black"></span>
            Menu
          </button>
          <div
            className="hidden relative w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="menu flex items-center justify-evenly gap-10">
              <CLink className={`text-${color}`} to="/work">
                Work
              </CLink>
              <CLink className={`text-${color}`} to="/about">
                About
              </CLink>
              <CLink className={`text-${color}`} to="/contact">
                Contact
              </CLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
