import { data } from "@/lib/data";
import AnimationContainer from "../utils/AnimationContainer";
import Skill from "./Skill";

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full py-8">
      <div className="flex justify-center md:justify-start">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
          Skills & Tools
        </h2>
      </div>

      <div className="grid gap-2 grid-cols-5 md:grid-cols-10">
        {data?.mySkills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
