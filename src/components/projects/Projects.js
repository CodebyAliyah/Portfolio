import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="YOUTUBE CLONE"
          des=" Build your own video-sharing platform with our YouTube clone, featuring user-friendly interfaces, video upload and playback, and interactive community features for a seamless experience"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Create a dynamic online store with our e-commerce web solution, offering intuitive product browsing, secure transactions, and seamless shopping experiences for both customers and sellers."
          src={projectTwo}
        />
        <ProjectsCard
          title="WEATHER APP"
          des=" Get real-time weather updates and forecasts with our 
          sleek,user-friendly app, designed for accuracy and ease of use."
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
