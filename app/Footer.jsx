import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full bg-gray-100 border-t-2 py-6  flex justify-start  flex-col items-center space-y-6">
      <div className=" flex items-center justify-center flex-col">
        <h1 className="text-xl lg:text-2xl text-amber-700 font-Iransansblack">
          ما در 7 روز هفته آماده خدمت به شما هستیم
        </h1>
        <p className="text-xl mt-2 text-amber-700 font-Iransansblack">
          09:00 - 22:00
        </p>
      </div>

      <div className="max-w-[950px] px-6  w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-start lg:items-end justify-start w-full max-w-[400px]">
          <div>
            <h4 className="text-2xl text-amber-700 font-IransansBold mb-2">
              تلفن :
            </h4>
            <p>021 66831507</p>
            <h4 className="text-2xl text-amber-700 font-IransansBold mb-2 mt-5 lg:mt-0">
              موبایل :
            </h4>
            <p>+98 09338963857</p>
          </div>
        </div>
        <div className="w-1 h-20 hidden lg:block bg-amber-700 rounded-sm " />
        <div
          className="flex flex-col w-full max-w-[400px] mt-5 lg:mt-0
        "
        >
          <div>
            <h4 className="text-2xl text-amber-700 font-IransansBold mb-2">
              ادرس :
            </h4>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <button className="w-12 h-12 border border-amber-700 bg-amber-700 duration-300 rounded-full flex items-center justify-center text-gray-50 hover:bg-gray-100 shadow-sm hover:text-amber-700">
          <AiFillInstagram size={25} />
        </button>
        <button className="w-12 h-12 mx-6 border border-amber-700 bg-amber-700 duration-300 rounded-full flex items-center justify-center text-gray-50 hover:bg-gray-100 shadow-sm hover:text-amber-700">
          <IoLogoWhatsapp size={25} />
        </button>
        <button className="w-12 h-12 border border-amber-700 bg-amber-700 duration-300 rounded-full flex items-center justify-center text-gray-50 hover:bg-gray-100 shadow-sm hover:text-amber-700">
          <FaTelegram size={25} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
