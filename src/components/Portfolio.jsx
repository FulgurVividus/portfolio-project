import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "Forkify Application for recipe and management searching.",
    links: {
      site: "https://forkify-fulgur-vividus.netlify.app/",
      github: "https://github.com/FulgurVividus/Forkify",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description:
      "Mapty Application for tracking running and cycling exercises based on the geo-location.",
    links: {
      site: "https://mapty-fulgur-vividus.netlify.app/",
      github: "https://github.com/FulgurVividus/Mapty",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description:
      "The Notes App provides users with a simple and intuitive interface to manage their notes efficiently. With features like adding, deleting, editing, and searching notes, users can easily organize their thoughts and ideas.",
    links: {
      site: "https://github.com/FulgurVividus/Notes-App",
      github: "https://github.com/FulgurVividus/Notes-App",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <>
      <div
        className="max-w-[1200px] mx-auto my-6 grid grid-cols-8 gap-6"
        id="portfolio"
      >
        <div className="relative z-10 grid col-span-3 items-center grid-cols-1">
          <p className="text-gray-200 font-bold text-4xl -skew-y-6">
            Select Project
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="absolute w-[50px] top-10 right-12"
          />

          <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 space-y-2 md:space-y-4 text-2xl">
            {projects.map((project, index) => (
              <li
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`cursor-pointer text-gray-300 ${
                  currentProject === index ? "active-project" : ""
                }`}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="z-10 glass w-full col-span-5">
          <div className="w-full h-80">
            <img
              src={projects[currentProject].img}
              alt={projects[currentProject].title}
              className="w-full h-full rounded-lg"
            />
          </div>

          <div className="p-6">
            <p className="text-gray-200 my-4">
              {projects[currentProject].description}
            </p>
            <div className="flex space-x-4">
              <a
                href={projects[currentProject].links.site}
                target="blank"
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                View Site
              </a>
              <a
                href={projects[currentProject].links.github}
                target="blank"
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 text-3xl"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
