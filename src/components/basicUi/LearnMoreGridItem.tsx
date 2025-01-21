import Image from "next/image";
import learnMoreImage from "../../../public/images/learn-more-image.png";

import "@/styles/basicUi/_learnMoreGridItem.scss";

export default function LearnMoreGridItem({ about }: { about: string }) {
  return (
    <div className="learn-more-grid-item">
      <Image src={learnMoreImage} alt="Learn More Grid Item Image" />
      <h3>{about}</h3>
    </div>
  );
}
