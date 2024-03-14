"use client";
import React, { useRef, useState } from "react";
import useOutsideClick from "../app/customHooks/useOutsideClick";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

// import ReservationButton from "./ReservationButton";

const Header: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useOutsideClick(navRef, () => {
    setShowNav(false);
  });

  function navChange() {
    setShowNav(!showNav);
  }

  return (
    <header className=" max-w-7xl max-w-full">
      <div className="header-wrapper">
        <Link href="/" className="logo">
          <Image
            src="/transparent.png"
            width={150}
            height={75}
            alt="theLooks Logo"
          />
        </Link>
        <NavItems />
        {/* <ReservationButton /> */}
        <button
          id="hamburger-btn"
          className={showNav ? "active" : ""}
          onClick={navChange}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export { Header };
