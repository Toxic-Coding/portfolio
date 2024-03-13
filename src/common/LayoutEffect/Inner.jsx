"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slide, opacity, perspective } from "./anim";
import "./style.scss";
import Link from "next/link";
const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};
const Inner = ({ children }) => {
  return (
    <div className="inner">
      <motion.div className="slide" {...anim(slide)} />
      <motion.div className="page" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <div className="header w-full">
            <nav className="nav justify-content-center gap-2 text-pink-600">
              <Link className="nav-link active" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/about">
                About
              </Link>
            </nav>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
