import Link from "next/link";
import React from "react";
import "./style.scss";
import Magnetic from "../magnetic/Magnetic";
const CLink = ({ to, children, className, ...attr }) => {
  return (
    <Magnetic>
      <li className={`li ${className} overflow-hidden`}>
        <Link className="link" href={to} {...attr}>
          {children}
        </Link>
        <Link className="link" href={to} {...attr}>
          {children}
        </Link>
      </li>
    </Magnetic>
  );
};

export default CLink;
