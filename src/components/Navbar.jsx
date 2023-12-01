import React, { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <img src={logo} alt="gnias bank" className="w-32 h-16 object-cover" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-glacialindiff uppercase font-normal cursor-pointer text-[16px] transition-all ease-in-out duration-300 hover:text-[20px] hover:leading-[26px] hover:text-teal-400 ${
              index === navLinks.length - 1 ? "mr-24" : "mr-12"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`} className="">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] mr-5 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`font-glacialindiff uppercase font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-3 "
                }`}
                key={nav.id}
              >
                <a href={`#${nav.id}`} className="">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
