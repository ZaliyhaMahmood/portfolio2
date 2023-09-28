import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaGit,
  FaGitSquare,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 size={50} />,
    name: "HTML",
  },
  {
    icon: <FaCss3 size={50} />,
    name: "CSS",
  },
  {
    icon: <SiJavascript size={50} />,
    name: "JavaScript",
  },
  {
    icon: <FaReact size={50} />,
    name: "React",
  },
  {
    icon: <SiTypescript size={50} />,
    name: "TypeScript",
  },
  {
    icon: <SiNextdotjs size={50} />,
    name: "NextJS",
  },
  {
    icon: <FaSass size={50} />,
    name: "Sass",
  },
  {
    icon: <SiRedux size={50} />,
    name: "Redux",
  },
  {
    icon: <FaGitSquare size={50} />,
    name: "Git",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="body-text relative  text-white w-full p-20  "
    >
      <div className="flex-center">
        <div className="absolute z-[0] w-[30%] h-[35%] top-[50%] left=[50%] pink__gradient" />
        <div className="">
          <p className="text-sm mb-5 uppercase text-grey-100">Technologies —</p>
          <p className=" heading3  text-white">
            Tech stacks I have worked with 🛠
          </p>
          <div className="grid grid-cols-5 gap-5 mt-12 p-10">
            {skills?.map(({ icon, name }) => (
              <div className="purple_gradient p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
                {icon}
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
