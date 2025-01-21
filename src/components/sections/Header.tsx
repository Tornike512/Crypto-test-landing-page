import Image from "next/image";
import mainLogo from "../../../public/images/main-logo.png";
import searchIcon from "../../../public/images/search-icon.png";
import searchButtonIcon from "../../../public/images/search-button-icon.png";
import twitterLogo from "../../../public/images/twitter-logo.png";
import telegramLogo from "../../../public/images/telegram-logo.png";
import monitorIcon from "../../../public/images/monitor-icon.png";

import "@/styles/sections/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <Image className="website-logo" src={mainLogo} alt="Website Logo" />
      <form className="header-search-form">
        <Image className="search-icon" src={searchIcon} alt="Search Icon" />
        <input
          className="header-search"
          type="text"
          placeholder="Search ai agents..."
        />
        <button className="header-search-button">
          <Image src={searchButtonIcon} alt="Search Button Icon" />
          <div>K</div>
        </button>
      </form>
      <div className="header-navigation">
        <Image src={twitterLogo} alt="Twitter Logo" />
        <Image src={telegramLogo} alt="Telegram Logo" />
        <Image src={monitorIcon} alt="Monitor Icon" />
        <button className="start-buying-button">Start Buying</button>
      </div>
    </header>
  );
}
