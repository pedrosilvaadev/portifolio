"use client";
import { Project as ProjectProps } from "@/types";
import { motion } from "framer-motion";
import AnimationContainer from "../utils/AnimationContainer";
import Project from "../utils/Project";
import { data } from "@/lib/data";

const FeaturedProjects = () => {
  return (
    <AnimationContainer customClassName="w-full py-8  relative">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        Featured Projects
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="bg-blue-500/10 hidden lg:block -z-10 w-[30rem] right-[-5rem] top-[8rem] absolute h-[18rem] blur-[10rem] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="bg-violet-500/10 hidden lg:block -z-10 w-[30rem] left-[-5rem] bottom-[8rem] absolute h-[18rem] blur-[10rem] rounded-full"
      />

      <div className="w-full gap-4 flex flex-col">
        {data?.projects?.map((project: ProjectProps) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </AnimationContainer>
  );
};

export default FeaturedProjects;
