import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";

const Main = () => {
  return (
    <section className="nav-padding w-full text-white px-20 my-9 ">
      <div className="flex">
        <div>
          <p className="text-body w-7/12 text-white-800 ">Hi there 👋🏽 , I'm</p>
          <h1 className="sm:heading1 heading1 my-6  text-white-600">
            Zaliyha.
          </h1>
          <h2 className="heading2 mb-5 text-secondary ">
            Front-End Developer.
          </h2>
          <p className="text-body text-xl w-7/12 text-white-800">
            I am a software engineer and front-end web developer. I build
            applications that solve real-world problems and provide users with
            an awesome experience. 👩🏽‍💻
          </p>
          <div className="flex gap-4 mt-20">
            <AiFillGithub className="w-[30px] h-[30px] object-contain" />
            <AiFillLinkedin className="w-[30px] h-[30px] object-contain" />
          </div>
          <div className="mt-20 border-b border-grey-100 w-[20%]" />
        </div>

        <div className="absolute z-[0] w-[40%] h-[15%] right-0  pink__gradient" />
      </div>
    </section>
  );
};

export default Main;
