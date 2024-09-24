import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor ">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor in Computer Science"
            subTitle="University of GCUF (2021 - Present)"
            result="A-Grade"
            des="Bachelor's degree in Computer Science with a focus on software development and full-stack web technologies.."
          />
          <ResumeCard
            title="A-Level"
            subTitle="Punjab College (2019 - 2021)"
            result="A+ Grade"
            des="Achieved A-Level in Computer Science with a focus on programming fundamentals and algorithm design, laying a strong foundation for advanced full-stack development with the MERN stack."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Anjuman Secondary School (2017 - 2019)"
            result="A+ Grade"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-4xl font-bold">Other Activity</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="School Teacher"
            subTitle="Anjuman Secondary School (2020 - 2022)"
            result="Pakistan"
            des="Secondary education or post-primary education covers two phases on 
             the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Carrer Focus"
            subTitle="At Anjuman Secondary School (2020 - 2021)"
            result="Pakistan"
            des="Dedicated educator with a focus on inspiring the next generation of tech talent"
          />
          <ResumeCard
            title="Web Developer"
            subTitle=" At Self Employed (2020 - Present)"
            result="Pakistan & UAE"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
