import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="GradientBorderv3 marker:p-5 rounded-[20px] sm:w-[360px] w-full"
      >
        <div className="bg-tertiary p-2 rounded-[20px]">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <button
                className="bg-tertiary py-2 px-8 mr-2  w-fit text-white font-bold shadow-md shadow-primary h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(live_site_link, "_blank")}
              >
                Site
              </button>
            </div>
          </div>

          <div className="mt-5 px-2">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 px-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects that showcase my skills and experience
          through real-world examples. Each project is always different in some
          way. An important part of my day to day job is to understand unique
          techonologies, solve problems and work with different teams and
          people. You can find some of my recent work down below. 👇
        </motion.p>
      </div>

      <div className="pt-20 flex justify-center flex-wrap m-auto gap-7 lg:gap-9 lg:grid lg:grid-cols-2 lg:w-4/5 xl:w-2/3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
