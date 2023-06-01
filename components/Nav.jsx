"use client";

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);

  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        {/* logo */}
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <h1 className="font-bangers text-[42px] text-white uppercase tracking-[0.03em]">
            Pizza <span className="text-secondary">LaPierre</span>
          </h1>
        </Link>

        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
            <Image src={"phone.svg"} width={42} height={42} alt="" />
            <div className="text-white">
              <div className="font-roboto uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-roboto font-extrabold leading-none tracking-wide">
                444 444 44
              </div>
            </div>
          </div>

          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden lg:flex"
          >
            <Image src={"bag.svg"} width={38} height={38} alt="" />
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-roboto absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
