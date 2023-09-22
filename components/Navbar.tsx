import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/logo.svg"
            color="white"
            height={43}
            width={115}
            alt="Logo image"
          />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          color="white"
          height={30}
          width={30}
          alt="Hamburger menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="body-text">
            <Link href="/">Projects</Link>
          </li>
          <li className="body-text">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
