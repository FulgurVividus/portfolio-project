import React from "react";
import { FaGithubSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto gap-6 flex justify-between p-6 md:gap-0 md:p-20 text-sm md:text-lg mt-12">
        <div className="">
          <h3 className="text-2xl text-gray-200 font-semibold">M.Muzaffarov</h3>
          <div className="flex flex-row gap-6 text-gray-400 text-4xl mt-2">
            <a href="https://github.com/FulgurVividus" target="_blank">
              <FaGithubSquare />
            </a>
            <a href="https://t.me/MurodjonMuzaffarov" target="_blank">
              <FaTelegram />
            </a>
          </div>
        </div>

        <p className="text-gray-400">©2024 M.Muzaffarov</p>
      </div>
    </>
  );
};

export default Footer;
