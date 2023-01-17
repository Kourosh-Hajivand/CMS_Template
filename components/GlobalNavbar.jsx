"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { usePathname } from "next/navigation";

function GlobalNavbar() {
  const headers = [
    { title: "خانه", link: "/" },
    { title: "منو", link: "/Menu", status: "Menu" },
    { title: "وبلاگ", link: "/Blog", status: "Blog" },
  ];
  const [scrolled, setscrolled] = useState(false);
  const [active, setactive] = useState(false);
  const pathname = usePathname();

  const id = pathname.split("/")[1];

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
      className={`w-full py-5 px-4  fixed top-0 duration-300 left-0 z-40 ${
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
          <ul className="flex text-xl">
            {headers.map((item, index) => {
              return (
                <Link className=" mx-5" key={index} href={`${item.link}`}>
                  <li
                    className={`${
                      (id === item.status) & scrolled ? "text-amber-700" : ""
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
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
                <Link
                  key={index}
                  className={`${id === item.status ? "text-amber-700" : ""}`}
                  href={`${item.link}`}
                >
                  <li className="text-lg my-3">{item.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GlobalNavbar;
