import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          <Link href="#">
            <h1 className="font-bangers text-[42px] text-white uppercase tracking-[0.03em]">
              Pizza <span className="text-secondary">LaPierre</span>
            </h1>
          </Link>

          <div className="flex gap-x-6 text-xl text-white">
            <Link href="#">
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaPinterest />
            </Link>
          </div>

          <div className="text-white font-medium">
            Copyright &copy; Pizza LaPierre. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
