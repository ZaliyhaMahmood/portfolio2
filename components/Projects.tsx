"use client";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <section
      id="projects"
      className="body-text text-center mt-60 text-white w-full p-20 my-16 bg-black-200 border-t border-black"
    >
      <div>
        <h2 className="heading3  mb-5 ">Projects</h2>
        <p className="text-body text-white-800">
          Following projects showcase my skills and experience through real
          world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies
          and manage projects effectively.{" "}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="bg-black rounded-2xl p-5 text-left mt-10">
            <div className="relative w-full h-[230px] rounded-2xl">
              <Image
                src="/test.png"
                alt="project image"
                className="w-full h-full object-cover rounded-2xl"
                width={100}
                height={100}
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open("www.github.com", "_blank")}
                  className="bg-black rounded-full w-10 h-10 flex-center cursor-pointer"
                >
                  <AiFillGithub className="w-1/2 h-1/2 object-contain" />
                </div>
                <div
                  onClick={() => window.open("www.github.com", "_blank")}
                  className="bg-black rounded-full w-10 h-10 flex-center cursor-pointer"
                >
                  <AiFillGithub className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-bold text-2xl pt-5">E-commerce website</p>
              <HiOutlineExternalLink />
            </div>
            <p className="mt-5">
              This is the project description. Following projects showcase my
              skills and experience through real world examples of my work. Each
              project is briefly described with links to code repositories and
              live demos in it.{" "}
            </p>
            <div className="flex gap-2">
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                React
              </div>
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                Redux
              </div>
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                TypeScript
              </div>
            </div>
          </div>
          <div className="bg-black rounded-2xl p-5 text-left mt-10">
            <div className="relative w-full h-[230px] object-cover rounded-2xl">
              <Image
                src="/test.png"
                alt="project image"
                className="w-full h-full object-cover rounded-2xl"
                width={100}
                height={100}
              />
            </div>
            <p className="font-bold text-2xl pt-5 block">
              E-commerce website
              <HiOutlineExternalLink />
            </p>
            <p className="mt-5">
              This is the project description. Following projects showcase my
              skills and experience through real world examples of my work. Each
              project is briefly described with links to code repositories and
              live demos in it.{" "}
            </p>
            <div className="flex gap-2">
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                React
              </div>
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                Redux
              </div>
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                TypeScript
              </div>
            </div>
          </div>
          <div className="bg-black rounded-2xl p-5 text-left mt-10">
            <div className="relative w-full h-[230px] object-cover rounded-2xl">
              <Image
                src="/test.png"
                alt="project image"
                className="w-full h-full object-cover rounded-2xl"
                width={100}
                height={100}
              />
            </div>

            <p className="font-bold text-2xl pt-5">E-commerce website</p>
            <p className="mt-5">
              This is the project description. Following projects showcase my
              skills and experience through real world examples of my work. Each
              project is briefly described with links to code repositories and
              live demos in it.{" "}
            </p>
            <div className="flex gap-2">
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                React
              </div>
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                Redux
              </div>
              <div className="rounded-full bg-slate-800 w-fit px-3 py-1 mt-5">
                TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
