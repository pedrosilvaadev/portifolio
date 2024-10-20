import React from "react";
import AnimationContainer from "../utils/AnimationContainer";

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full py-0 lg:py-8">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        Professional experience in Front-end Development with{" "}
        <span className="font-bold">+4 years of experience</span>.
        Specialization in{" "}
        <span className="font-bold">
          Next.js, React, JavaScript, TypeScript,Tailwind CSS.
        </span>{" "}
        With notable experience in administrative systems, fintech, retail and
        education companies. Focus on the solution, team energy and positive
        relationships. Leadership in software development and maintenance,
        training of interns and juniors, generating leads and optimizing
        performance KPIs.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
