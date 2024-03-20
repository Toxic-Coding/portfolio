"use client";
import React from "react";
import { motion } from "framer-motion";
import CLink from "../Link/Link";
import Image from "next/image";
const LinkEdin = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
        position: "fixed",
        bottom: 30,
        right: 30,
        borderRadius: 50,
        overflow: "hidden",
      }}
      animate={{ scale: 1.5 }}
      transition={{ duration: 0.5, delay: 3, ease: "linear" }}
    >
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
    </motion.div>
  );
};

export default LinkEdin;
