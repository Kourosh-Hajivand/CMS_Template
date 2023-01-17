import Image from "next/image";
import React from "react";
import aboutbg from "../public/aboutbg.png";
import { GiPaperBagFolded } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { CiCoffeeBean } from "react-icons/ci";
import axios from "axios";

async function About() {
  return (
    <div className="w-full min-h-screen  bg-gray-100 py-20 px-10  flex items-center justify-center ">
      <div className="w-full min-h-screen grid lg:grid-cols-2 place-items-center max-w-[1250px]">
        <div className="w-full flex items-start flex-col justify-start h-full py-5  text-right order-2 lg:order-1 ">
          <h4 className="text-2xl text-amber-700 font-IransansBold mb-5">
            درباره محصولات ما
          </h4>
          <h1 className="text-5xl font-Iransansblack text-neutral-800 mb-6">
            بهترین نوع قهوه
          </h1>
          <div className="w-full justify-start items-start flex flex-col space-y-16 my-6">
            <div
              data-aos="fade-left"
              className="flex justify-center  items-center  relative  "
            >
              <GiPaperBagFolded size={150} className=" text-amber-700 " />
              <div className="lines">
                <h2 className="text-4xl font-IransansBold text-amber-700 mb-3">
                  بسته بندی
                </h2>
                <p className="font-IransansThin text-neutral-800 w-full  lg:max-w-[80%]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="flex justify-center  items-center relative "
            >
              <FaRecycle size={120} className=" text-amber-700 ml-3" />
              <div className="lines">
                <h2 className="text-4xl font-IransansBold text-amber-700 mb-3">
                  بازیافت
                </h2>
                <p className="font-IransansThin text-neutral-800 w-full  lg:max-w-[80%]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex justify-center  items-center "
            >
              <CiCoffeeBean size={120} className="text-amber-700 ml-3" />
              <div>
                <h2 className="text-4xl font-IransansBold text-amber-700 mb-3">
                  رست تازه
                </h2>
                <p className="font-IransansThin text-neutral-800 w-full  lg:max-w-[80%]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[400px] w-full h-full flex items-center justify-center  bg-center order-1 lg:order-2">
          <Image
            src={aboutbg}
            alt="about Background"
            fill
            className="lg:object-right object-center object-contain bg-center"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
