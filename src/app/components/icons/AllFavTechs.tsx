"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const AllFavTechs = () => {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const techs = [
    { name: "Next.js", icon: SiNextdotjs, colorClass: "hover:text-white" },
    { name: "React", icon: SiReact, colorClass: "hover:text-[#61DAFB]" },
    {
      name: "Typescript",
      icon: SiTypescript,
      colorClass: "hover:text-[#3178C6]",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      colorClass: "hover:text-[#38B2AC]",
    },
    { name: "Node.js", icon: SiNodedotjs, colorClass: "hover:text-[#8CC84B]" },
    {
      name: "Javascript",
      icon: SiJavascript,
      colorClass: "hover:text-[#fff000]",
    },
    { name: "Mongodb", icon: SiMongodb, colorClass: "hover:text-[#115c1b]" },
  ];

  return (
    <>
      <motion.p
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.2 }}
        className="mb-3 text-base text-center text-neutral-300 lg:text-start"
      >
        My core technology stack:
      </motion.p>

      <TooltipProvider delayDuration={0}>
        <motion.ul
          initial="hide"
          animate="show"
          transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
          className="flex flex-wrap items-center justify-center mx-auto gap-x-5 lg:mx-0"
        >
          {techs.map((tech, index) => (
            <motion.li
              key={`${tech.name}-${index}`}
              variants={animation}
              className="opacity-100"
            >
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={`transition duration-300 ease-out text-neutral-700 ${tech.colorClass}`}
                  >
                    <tech.icon className="w-6 h-6" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.li>
          ))}
        </motion.ul>
      </TooltipProvider>
    </>
  );
};

export default AllFavTechs;
