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

const Skills = () => {
  return (
    <section
      id="skills"
      className="body-text flex-center mt-60 text-white w-full p-20 my-16 bg-black-200 border-t border-black"
    >
      <div className="paddings text-center">
        <h2 className="heading3  mb-5 ">Skills</h2>
        <p className="text-body text-white-800">
          Tech stacks I have worked with
        </p>
        <div className="grid grid-cols-5 gap-4 mt-12">
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <FaHtml5 color={"#695CA3"} size={50} />
            HTML
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <FaCss3 color="#695CA3" size={50} />
            CSS
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <SiJavascript color="#695CA3" size={50} /> JavaScript
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <FaReact color="#695CA3" size={50} /> React
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <SiTypescript color="#695CA3" size={50} /> TypeScript
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <SiNextdotjs color="#695CA3" size={50} /> NextJS
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <FaSass color="#695CA3" size={50} /> Sass
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <SiRedux color="#695CA3" size={50} /> Redux
          </div>
          <div className="bg-black p-5 rounded-xl flex flex-col gap-y-4 items-center justify-center w-48">
            <FaGitSquare color="#695CA3" size={50} /> Git
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
