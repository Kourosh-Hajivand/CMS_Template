import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menubg from "../public/Menu.png";

async function Menu() {
  const Maindata = [
    {
      title: "اسپرسو",
      resepi: "یک شات اسپرسو",
      amount: "15",
    },
    {
      title: "اسپرسو دبل",
      resepi: "یک شات اسپرسو دبل",
      amount: "20",
    },
    {
      title: "لاته",
      resepi: "یک شات اسپرسو و فوم شیر",
      amount: "30",
    },
    {
      title: "آفوگاتو",
      resepi: "یک شات اسپرسو و بستنی",
      amount: "45",
    },
    {
      title: "کاپوچینو",
      resepi: "یک شات اسپرسو و فوم شیر و پودرشکلات ",
      amount: "35",
    },
    {
      title: "هات چاکلت",
      resepi: "شکلات داغ",
      amount: "30",
    },
    {
      title: "چای ماسالا",
      resepi: "چای ماسالا و فوم شیر",
      amount: "55",
    },
  ];
  const dataMenu = Maindata.slice(0, 4);
  return (
    <div className="w-full min-h-screen bg-white pt-20 pb-10 px-10  flex items-center justify-center">
      <div className="w-full min-h-screen grid lg:grid-cols-2 place-items-center max-w-[1250px]">
        <div className="w-full flex items-start flex-col justify-start h-full py-5  text-right order-2">
          <h4 className="text-2xl text-amber-700 font-IransansBold mb-5">
            وقت قهوه هست
          </h4>
          <h1 className="text-3xl lg:text-4xl font-Iransansblack text-neutral-800 mb-6">
            ما بهترین ها رو داریم
          </h1>
          <div className="w-full flex flex-col space-y-10 my-6 px-2 lg:px-6">
            {dataMenu.map((item, index) => {
              return (
                <div
                  data-aos="fade-left"
                  key={index}
                  className="w-full flex justify-between relative lines p-2 rounded duration-300 hover:bg-neutral-50 hover:drop-shadow-md"
                >
                  <div>
                    <h4 className="text-3xl font-IransansMD">{item.title}</h4>
                    <p className="font-IransansThin">{item.resepi}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <h5 className="text-amber-700 text-5xl">{item.amount}</h5>
                    <p className="text-amber-800">تومان</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href={"/Menu"}
            alt="blog"
            scroll={false}
            className="w-full max-w-[300px] mx-auto"
          >
            <button className=" px-6 py-2 border border-amber-700 w-full mx-auto rounded mt-10 duration-300 text-amber-700 hover:bg-amber-700 hover:text-neutral-50 hover:drop-shadow-lg ">
              بیشتر...
            </button>
          </Link>
        </div>
        <div className="relative min-h-[400px] w-full h-full order-1 px-5">
          <Image
            src={Menubg}
            fill
            className="object-contain object-center"
            alt="Menu Bg"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
