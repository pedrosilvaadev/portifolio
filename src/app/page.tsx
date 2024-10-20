import { GradientBackground, HomeSection } from "@/app/components";
import React from "react";

const Home = () => {
  return (
    <GradientBackground>
      <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-10">
        <HomeSection />
      </main>
    </GradientBackground>
  );
};

export default Home;
