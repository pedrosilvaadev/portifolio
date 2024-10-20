"use client";

import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Header = () => {
  const links = [
    {
      name: "Linkedin",
      icon: <SiLinkedin className="w-5 h-5 hover:text-[#3178C6]" />,
      link: "https://www.linkedin.com/in/pedroh-dev/",
    },
    {
      name: "Github",
      icon: <SiGithub className="w-5 h-5 hover:text-white" />,
      link: "https://github.com/Dev-Pedrosv",
    },
    {
      name: "Instagram",
      icon: <SiInstagram className="w-5 h-5 hover:text-[#e95586]" />,
      link: "https://www.instagram.com/pedrosilvadev_/",
    },
    {
      name: "Youtube",
      icon: <SiYoutube className="w-5 h-5 hover:text-[#c00303]" />,
      link: "https://www.youtube.com/@pedrosilvadev_",
    },
  ];

  return (
    <header className="w-full flex justify-center">
      <nav className="flex py-2 ">
        <ul className="flex items-center justify-center gap-x-4 w-full h-full">
          <TooltipProvider delayDuration={0}>
            {links?.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                }}
                className="relative text-sm text-gray-400"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={link.link}
                      className={cn(
                        "flex items-center justify-center px-4 py-2 transition "
                      )}
                    >
                      {link.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.li>
            ))}
          </TooltipProvider>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
