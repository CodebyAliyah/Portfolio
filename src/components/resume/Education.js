import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor in Computer Science"
            subTitle="University of GCUF (2021 - Present)"
            result="A-Grade"
            des="Bachelor's degree in Computer Science with a focus 
            on software development and full-stack web technologies."
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
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2021 - Present)"
            result="Pakistan & USA"
            des="The Pakistan economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
          <ResumeCard
            title="Web Developer"
            subTitle=" Developer Team - (2023 - Present)"
            result="Pakistan"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Pakistan isn't easy."
          />
           <ResumeCard
            title="Back-End Technologies"
            subTitle="At Self Employed - (2023 - Present)"
            result="Pakistan & UAE"
            des="Skilled in backend technologies, with expertise in building robust APIs and server-side logic using Node.js and Express. Adept at managing databases with MongoDB and ensuring seamless data flow and security."
          />
         
        </div>
      </div>
    </motion.div>
  );
}

export default Education