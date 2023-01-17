import Image from "next/image";
import Link from "next/link";
import React from "react";
import topMenuBg from "../../public/MenuBackground.jpeg";

function Menu() {
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
  return (
    <div className="w-full min-h-screen pt-24 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1040px] flex flex-col space-y-10 my-6 px-2 lg:px-6">
        {Maindata.map((item, index) => {
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
      <div className="w-full h-80 relative">
        <Image
          src={topMenuBg}
          fill
          alt="image"
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
}

export default Menu;
