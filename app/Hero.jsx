"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../public/HeroImage.jpg";
import Scroll from "react-scroll";
function Hero() {
  const scroll = Scroll.animateScroll;
  return (
    <div className="w-full h-screen flex items-center px-10 justify-start  imagewraper">
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src={HeroImage}
          className="object-cover"
          fill
          priority={true}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 100vw,
      33vw"
          alt="Hero background"
        />
      </div>
      <div className="bg-black/75 fixed top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="z-10 flex space-y-7 flex-col justify-start items-start ">
        <h1 className="text-2xl md:text-4xl  text-neutral-50 font-IransansBold">
          خوش آمدید به{" "}
          <span className="text-amber-600 inline-block md:inline md:text-7xl text-6xl mt-5">
            کافی شاپ{" "}
          </span>
        </h1>
        <p className="max-w-[700px] text-sm md:text-lg font-IransansThin  text-neutral-200">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>

        <button
          onClick={() => scroll.scrollToBottom()}
          className="px-10  py-3 text-neutral-100 border border-amber-600 rounded duration-300 hover:bg-amber-600  active:scale-90  "
        >
          ارتباط با ما
        </button>
      </div>
    </div>
  );
}

export default Hero;
