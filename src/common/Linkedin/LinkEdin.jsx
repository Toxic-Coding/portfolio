"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "../magnetic/Magnetic";
import Link from "next/link";
const LinkEdin = () => {
  return (
    <Magnetic>
      <motion.div
        initial={{
          scale: 0,
          position: "fixed",
          bottom: 30,
          right: 30,
          borderRadius: 50,
          overflow: "hidden",
        }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 3, ease: "linear" }}
      >
        <Link
          href={"https://www.linkedin.com/in/muhammad-adil-462624236"}
          target="_blank"
        >
          <Image
            src={"/linkedin.png"}
            alt="linkedin"
            width={30}
            height={30}
            className="rounded-lg object-cover"
          />
        </Link>
      </motion.div>
    </Magnetic>
  );
};

export default LinkEdin;
