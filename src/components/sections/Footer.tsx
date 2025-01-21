import facebookLogo from "../../../public/images/facebook-logo.png";
import githubLogo from "../../../public/images/github-logo.png";
import instagramLogo from "../../../public/images/instagram-logo.png";
import xLogo from "../../../public/images/x-logo.png";
import youtubeLogo from "../../../public/images/youtube-logo.png";

import Image from "next/image";

import "@/styles/sections/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="navigation">
        <div className="footer-nav">About</div>
        <div className="footer-nav">Blog</div>
        <div className="footer-nav">Jobs</div>
        <div className="footer-nav">Press</div>
        <div className="footer-nav">accessibility</div>
        <div className="footer-nav">Partners</div>
      </nav>
      <div className="socials">
        <Image src={facebookLogo} alt="Facebook Logo" />
        <Image src={instagramLogo} alt="Instagram Logo" />
        <Image src={xLogo} alt="X Logo" />
        <Image src={githubLogo} alt="Github Logo" />
        <Image src={youtubeLogo} alt="Youtube Logo" />
      </div>
      <p className="company">© 2024 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
}
