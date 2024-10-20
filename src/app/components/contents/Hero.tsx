import Image from "next/image";
import AnimationContainer from "../utils/AnimationContainer";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between w-full py-12 lg:py-16 lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
        <h1 className="text-xl font-bold text-white sm:text-3xl lg:text-5xl">
          Pedro Silva
        </h1>
        <h3 className="text-base text-center lg:text-start lg:text-lg text-white font-medium pb-4">
          Senior Front End Developer
        </h3>
        <h3 className="text-base text-center lg:text-start lg:text-lg text-white/80">
          <span className="font-medium text-white">
            Bridging Code and Design
          </span>{" "}
          to build beautiful and functional web applications.
        </h3>
      </AnimationContainer>

      <AnimationContainer customClassName="mb-8 relative lg:mb-0">
        <Image
          src="/images/profile.png"
          alt="Pedro Silva"
          height={2190}
          width={2190}
          priority
          className="object-cover w-44 h-44 transition duration-300 ease-out rounded-lg lg:w-60 lg:h-60"
        />
        <div className="absolute block w-44 h-44 rounded-full md:hidden top-0 left-0 right-1/2 -z-10 bg-violet-500/40 blur-[5rem]"></div>
      </AnimationContainer>
    </div>
  );
};

export default Hero;
