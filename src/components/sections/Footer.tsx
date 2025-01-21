import facebookLogo from "../../../public/images/facebook-logo.png";
import githubLogo from "../../../public/images/github-logo.png";
import instagramLogo from "../../../public/images/instagram-logo.png";
import xLogo from "../../../public/images/x-logo.png";
import youtubeLogo from "../../../public/images/youtube-logo.png";

import Image from "next/image";
import Link from "next/link";

import "@/styles/sections/_footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="navigation">
        <Link className="footer-nav" href="#">
          About
        </Link>
        <Link className="footer-nav" href="#">
          Blog
        </Link>
        <Link className="footer-nav" href="#">
          Jobs
        </Link>
        <Link className="footer-nav" href="#">
          Press
        </Link>
        <Link className="footer-nav" href="#">
          accessibility
        </Link>
        <Link className="footer-nav" href="#">
          Partners
        </Link>
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
