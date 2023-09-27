import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col mb-16 ">
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
