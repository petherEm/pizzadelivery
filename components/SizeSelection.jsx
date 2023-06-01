import React from "react";

import Image from "next/image";

const SizeSelection = ({ pizza, size, setSize }) => {
  console.log(pizza);
  return (
    <div className="mx-auto max-w-sm  lg:max-w-none flex items-center justify-center lg:justify-start">
      <div className="flex gap-x-12 items-baseline mb-10 font-medium">
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "small"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={60}
            height={60}
            alt=""
          />
          Small
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
        </label>
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "medium"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={70}
            height={70}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Medium
        </label>
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "large"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={80}
            height={80}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
