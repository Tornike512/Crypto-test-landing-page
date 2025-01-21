import HeroSection from "@/components/sections/HeroSection";
import HottestSection from "@/components/sections/HottestSection";
import LearnMoreSection from "@/components/sections/LearnMoreSection";

import "@/styles/pages/_homePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <HottestSection />
      <LearnMoreSection />
    </div>
  );
}
