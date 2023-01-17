"use client";
import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { Link } from "react-scroll";

function Navbar() {
  const headers = ["خانه", "درباره ما", "منو", "وبلاگ"];
  const [scrolled, setscrolled] = useState(false);
  const [active, setactive] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY >= 100) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };
    window.addEventListener("scroll", changeBg);
  });
  const HumbergerHandler = () => {
    setactive(!active);
  };

  return (
    <div
      className={`w-full py-5 px-4 cursor-pointer  fixed top-0 duration-300 left-0 z-10 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 text-neutral-900 drop-shadow-lg"
          : " text-neutral-100"
      }`}
    >
      <div className="w-full max-w-[1290px] flex justify-between md:justify-start items-center mx-auto">
        <div className="flex items-center justify-center">
          <GiCoffeeBeans size={42} className="ml-5" />
        </div>
        {/* desktop */}
        <div className="hidden md:block">
          <ul className="flex">
            {headers.map((item, index) => {
              return (
                <li className="text-xl mx-5" key={index}>
                  <Link
                    className={`relative linenav ${
                      scrolled ? "after:bg-amber-700 " : "after:bg-white"
                    } `}
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={0}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* mobile */}
        <div
          onClick={HumbergerHandler}
          className={` md:hidden hamburger hamburger--collapse  cursor-pointer ${
            active ? "is-active" : ""
          }`}
        >
          <div className="hamburger-box">
            <div
              className={`hamburger-inner ${
                scrolled
                  ? " bg-black after:bg-black before:bg-black "
                  : "bg-white after:bg-white before:bg-white "
              }`}
            ></div>
          </div>
        </div>
        <div
          className={` w-full md:hidden absolute left-0 p-4 duration-300 ease-in z-20  text-center ${
            !active ? " -top-96 opacity-1" : "top-20 opacity-1"
          }`}
        >
          <ul className="flex flex-col bg-white text-neutral-800 rounded py-3">
            {headers.map((item, index) => {
              return (
                <li key={index} className="text-lg my-3">
                  <Link
                    className={`relative linenav ${
                      scrolled ? "after:bg-black " : "after:bg-white"
                    } `}
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
