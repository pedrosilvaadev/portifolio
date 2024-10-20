import Header from "@/components/Header";
import AboutMe from "../contents/AboutMe";
import ContactMe from "../contents/ContactMe";
import CurrentFavTech from "../contents/CurrentFavTech";
import Experience from "../contents/Experience";
import FeaturedProjects from "../contents/FeaturedProjects";
import Hero from "../contents/Hero";
import MySkills from "../contents/MySkills";
import SectionContainer from "../utils/SectionContainer";

const HomeSection = () => {
  return (
    <SectionContainer>
      <Header />

      <div className="flex flex-col items-start w-full">
        <Hero />
        <CurrentFavTech />
        <AboutMe />
        <Experience />
        <FeaturedProjects />
        <MySkills />
        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
