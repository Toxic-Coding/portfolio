import Link from "next/link";
import React from "react";
import "./style.scss"
import Magnetic from "../magnetic/Magnetic";
const CLink = ({ to, children, className }) => {
  return (
    <Magnetic>
      <li className={`link ${className} overflow-hidden`}>
        <Link className="link1" href={to}>{children}</Link>
        <Link className="hoverLink" href={to}>{children}</Link>
      </li>
    </Magnetic>
  );
};

export default CLink;
