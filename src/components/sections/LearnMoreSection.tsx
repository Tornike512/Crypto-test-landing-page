import { aboutData } from "@/data/about";
import LearnMoreGridItem from "../basicUi/LearnMoreGridItem";

import "@/styles/sections/_learnMoreSection.scss";

export default function LearnMoreSection() {
  return (
    <section className="learn-more-section">
      <h2 className="learn-main-text">Learn more</h2>
      <div className="learn-more-grid">
        {aboutData.map((about) => {
          return <LearnMoreGridItem key={about.id} about={about.title} />;
        })}
      </div>
    </section>
  );
}
