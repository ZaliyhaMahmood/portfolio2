import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col mb-16 ">
      <section className="nav-padding w-full text-white px-20 my-9">
        <h1 className="sm:heading1 heading1 mb-6  text-white-600">
          Zaliyha Mahmood
        </h1>
        <h2 className="heading2 text-gradient mb-5 ">
          A Front-End Web Developer
        </h2>
        <p className="text-body w-7/12 text-white-800">
          I am a software engineer and front-end web developer. I build
          applications that solve real-world problems and provide users with an
          awesome experience. 👩🏽‍💻
        </p>
      </section>

      <Skills />
    </main>
  );
};

export default Home;
