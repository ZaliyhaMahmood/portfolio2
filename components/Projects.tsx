"use client";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    name: "E-commerce store",
    description:
      "This is the project description. Following projects showcase my skills and experience through real world examples of my work. Each  project is briefly described with links to code repositories and live demos in it",
    image: "/test.png",
    technologies: ["React", "Redux", "TypeScript"],
    githubLink: "",
    demoLink: "",
  },
  {
    name: "E-commerce store",
    description:
      "This is the project description. Following projects showcase my skills and experience through real world examples of my work. Each  project is briefly described with links to code repositories and live demos in it",
    image: "/test.png",
    technologies: ["React", "Redux", "TypeScript"],
    githubLink: "",
    demoLink: "",
  },
  {
    name: "E-commerce store",
    description:
      "This is the project description. Following projects showcase my skills and experience through real world examples of my work. Each  project is briefly described with links to code repositories and live demos in it",
    image: "/test.png",
    technologies: ["React", "Redux", "TypeScript"],
    githubLink: "",
    demoLink: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="body-text text-center  text-white w-full p-20  border-t border-black"
    >
      <div>
        <p className="text-sm mb-5 uppercase text-grey-100">
          Featured projects -
        </p>
        <h2 className="heading3  mb-5 ">What I've Worked on 📁</h2>
        <p className="text-body text-white-800">
          Following projects showcase my skills and experience through real
          world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies
          and manage projects effectively.{" "}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-12">
          {projects?.map((project) => (
            <div className="purple_gradient rounded-2xl text-left mt-10">
              <div className="relative w-full h-[230px] rounded-2xl">
                <Image
                  src={project?.image}
                  alt="project image"
                  className="w-full h-full object-cover rounded-t-2xl"
                  width={100}
                  height={100}
                />

                <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
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
                    <HiOutlineExternalLink className="w-1/2 h-1/2 object-contain" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="font-bold text-2xl pt-5">{project?.name}</p>

                <p className="mt-5 text-white-800 text-sm">
                  {project?.description}
                </p>
                <div className="flex gap-2">
                  {project?.technologies?.map((item) => (
                    <div className="rounded-full bg-secondary text-sm w-fit px-3 py-1 mt-5">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
