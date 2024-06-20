import React from "react";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
} from "react-icons/di";

const About = () => {
  return (
    <>
      <div
        className="max-w-[1000px] mt-12 mx-auto p-6 grid md:grid-cols-2 gap-8"
        id="about"
      >
        <div className="p-6">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-300 mb-4">
            I am a passionate Front-End Engineer constantly expanding my skills
            and knowledge. While I don&apos;t have enterprise experience yet, I
            have a solid foundation in modern web technologies and frameworks.
            My stack includes HTML, CSS, JavaScript, TypeScript, React,
            Git/GitHub, Tailwind CSS, SASS, Node.js, Next.js, and React Native.
            I am dedicated to staying up-to-date with the latest industry trends
            and continuously improving my craft.
          </p>

          <div className="flex flex-wrap gap-4 text-4xl justify-center">
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

        <div className="p-6">
          <h2 className="text-gray-200 text-3xl font-bold mb-4">
            Front-End experience
          </h2>
          <p className="text-gray-300 mb-4">
            I am a passionate Front-End Engineer who is always eager to learn
            and grow. While I am just starting my professional journey, I am
            deeply committed to mastering the craft and staying updated with the
            latest industry trends. My proactive approach and dedication to
            continuous improvement make me a strong candidate for innovative and
            dynamic projects. I am excited to bring my enthusiasm and fresh
            perspective to your team.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
