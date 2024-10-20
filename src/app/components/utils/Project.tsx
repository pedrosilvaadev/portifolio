import { Project as ProjectProps } from "@/types";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Button } from "../ui/Button";
import AnimationContainer from "./AnimationContainer";
import Image from "next/image";
import { Badge } from "@mantine/core";

interface Props {
  project: ProjectProps;
}

const Project = ({ project }: Props) => {
  return (
    <AnimationContainer customClassName="bg-[#080809] border border-border/50 w-full hover:border-neutral-800 rounded-xl">
      <div className="flex-col items-start p-4 h-full flex lg:p-5">
        <h4 className="text-lg font-medium text-neutral-100">
          {project?.title}
        </h4>
        <p className="mt-4 text-sm text-neutral-300 flex-1">
          {project?.description}
        </p>

        <div className="flex items-center justify-start flex-wrap gap-2 my-2">
          {project?.stack?.map((item, index) => (
            <Badge
              key={`${item}-${index}`}
              size="sm"
              radius="xs"
              variant="filled"
              color="dark"
              className="transition-colors duration-300 ease-in-out bg-transparent border border-zinc-400 px-2 rounded-sm"
            >
              <span className="text-white text-sm">{item}</span>
            </Badge>
          ))}
        </div>
        <div className="flex items-end gap-4">
          <Link href={project.github} target="_blank">
            <Button variant="outline" size="sm">
              <SiGithub className="w-5 h-5" />
              <span className="ml-2">Github</span>
            </Button>
          </Link>
          <Link href={project.view} target="_blank">
            <Button variant="outline" size="sm">
              <TbExternalLink className="w-5 h-5" />
              <span className="ml-2">View</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex relative justify-center">
        <Image
          alt="project"
          src={project.image[0].url}
          width={500}
          height={280}
          className="object-cover mt-4 rounded-xl w-[500px] h-[280px]"
        />
      </div>
    </AnimationContainer>
  );
};

export default Project;
