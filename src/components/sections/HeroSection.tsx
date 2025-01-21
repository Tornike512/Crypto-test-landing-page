import Image from "next/image";
import approvedIcon from "../../../public/images/approved-icon.png";
import currentCoin from "../../../public/images/current-coin.png";
import greenCircle from "../../../public/images/green-circle.png";
import userAvatar1 from "../../../public/images/user-avatar-1.png";
import userAvatar2 from "../../../public/images/user-avatar-2.png";
import userAvatar3 from "../../../public/images/user-avatar-3.png";

import "@/styles/sections/_heroSection.scss";

export default function HeroSection() {
  return (
    <section className="hero-section-wrapper">
      <div className="meme-coins-section">
        <h1 className="hero-main-text">
          Buy Memes. <br /> In Two Clicks.
        </h1>
        <p className="hero-paragraph">
          The fastest way to buy memes in just two clicks.
        </p>
        <p className="hero-paragraph">
          Under 1 minute to sign up and no wallet needed.{" "}
        </p>
        <div className="count-wrapper">
          <div className="total-users-wrapper">
            <div className="total-users">
              <Image src={greenCircle} alt="Green Circle" />
              <p>Total users</p>
            </div>
            <div className="users-count">
              <figure className="user-images">
                <Image
                  className="avatar-1"
                  src={userAvatar1}
                  alt="User Image"
                />
                <Image
                  className="avatar-2"
                  src={userAvatar2}
                  alt="User Image"
                />
                <Image
                  className="avatar-3"
                  src={userAvatar3}
                  alt="User Image"
                />
              </figure>
              <p>52,630</p>
            </div>
          </div>
          <div className="trade-volume-wrapper">
            <div className="trade-volume">
              <Image src={greenCircle} alt="Green Circle" />
              <p>Trade volume</p>
            </div>
            <p className="dollars-count">$1,288,314,266</p>
          </div>
        </div>
      </div>
      <div className="current-coin">
        <Image
          className="current-coin-image"
          src={currentCoin}
          alt="Current Coin"
        />
        <Image
          className="approved-coin"
          src={approvedIcon}
          alt="Approved Coin"
        />
        <div className="coin-description">
          <div className="virtual">
            <h3>VIRTUAL</h3>
            <p className="price">Price</p>
            <p className="exact-price">$2.74</p>
          </div>
          <div className="market-cap">
            <p className="market-percentage">▲ 0.59%</p>
            <p className="market-cap-text">Market cap</p>
            <p className="exact-market-cap">$1.7B</p>
          </div>
        </div>
      </div>
    </section>
  );
}
