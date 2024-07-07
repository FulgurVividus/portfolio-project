import React from "react";
import profilePic from "../assets/ppic2.png";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
} from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div
        className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0"
        id="home"
      >
        <div className="grid grid-cols-2 md:col-span-5 p-8 glass">
          <img
            src={profilePic}
            alt="profile-pic"
            className="w-[800px] rounded-full grayscale select-none"
          />

          <div className="my-auto ml-8 flex-col text-gray-200">
            <p className="text-xl md:text-4xl font-bold">
              Hi! I am Murodjon
              <br />
              <TypeAnimation
                sequence={["Front-End", 1000, "Web-Dev", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
            <br />
            <p className="text-xl md:text-3xl font-semibold text-gray-400">
              For now, no enterprise experience
            </p>
          </div>
        </div>

        <div className="grid md:col-span-3 gap-6">
          <div className="text-5xl p-12 glass">
            <p className="text-gray-200 text-xl font-bold mb-4 text-center">
              My Tech Stack
            </p>
            <div className="grid grid-cols-4 gap-4">
              <DiHtml5 className="text-orange-600" />
              <DiCss3 className="text-blue-600" />
              <DiSass className="text-pink-600" />
              <RiTailwindCssFill className="text-blue-500" />
              <DiJavascript1 className="text-yellow-500" />
              <DiNodejsSmall className="text-green-500" />
              <DiReact className="text-blue-500" />
              <RiNextjsFill className="bg-white rounded-full" />
              <SiTypescript className="text-blue-600" />
              <TbBrandGithub className="bg-white rounded-full" />
              <div className="flex">
                <FaMobileScreenButton className="text-white" />
                <DiReact className="text-blue-500" />
              </div>
            </div>
          </div>
          <div className="flex text-6xl gap-4 justify-center place-items-center glass text-gray-600">
            <a
              href="https://github.com/FulgurVividus"
              className="hover:scale-110 transition-transform duration-300"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://t.me/MurodjonMuzaffarov"
              className="hover:scale-110 transition-transform duration-300"
              target="_blank"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
