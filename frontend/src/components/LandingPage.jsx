import ParticleAnimation from "./ParticleAnimation";

import LandingPageHeader from "./landing-page/Header";
import LandingPageAbout from "./landing-page/About";
import LandingPageFeature from "./landing-page/Feature";
import LandingPageContactUs from "./landing-page/ContactUs";

import animationConfig from "../json/particles.json";
import LandingPageHero from "./landing-page/Hero";

const LandingPage = () => {
  return (
    <>
      <ParticleAnimation config={animationConfig} />

      <LandingPageHeader />
      <LandingPageHero />
      <LandingPageAbout />
      <LandingPageFeature />
      <LandingPageContactUs />
    </>
  );
};

export default LandingPage;
