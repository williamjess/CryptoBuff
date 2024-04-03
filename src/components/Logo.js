import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[10rem] [text-decoration:none]
text-lg text-red flex items-center
     "
    >
      <img src={logoSvg} alt="CryptoBuff" />
      <span>CryptoBuff</span>
    </Link>
  );
};

export default Logo;
