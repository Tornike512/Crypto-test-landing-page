import Image from "next/image";

import "@/styles/sections/_heroSection.scss";

export default function HeroSection() {
  return (
    <section className="hero-section-wrapper">
      <div className="meme-coins-section">
        <h1 className="hero-main-text">Buy Memes. In Two Clicks.</h1>
        <p>The fastest way to buy memes in just two clicks.</p>
        <p>Under 1 minute to sign up and no wallet needed. </p>
        <div className="count-wrapper">
          <div className="total-users-wrapper">
            <div className="total-users">
              <Image src="" alt="Green Circle" />
              <p>Total users</p>
            </div>
            <div className="users-count">
              <figure className="user-images">
                <Image src="" alt="User Image" />
                <Image src="" alt="User Image" />
                <Image src="" alt="User Image" />
              </figure>
              <p>52,630</p>
            </div>
          </div>
          <div className="trade-volume-wrapper">
            <div className="trade-volume">
              <Image src={""} alt="Green Circle" />
              <p>Trade volume</p>
            </div>
            <p className="dollars-count">$1,288,314,266</p>
          </div>
        </div>
      </div>
      <div className="current-coin">
        <Image className="current-coin" src={""} alt="Current Coin" />
        <Image className="approved-coin" src={""} alt="Approved Coin" />
        <div className="coin-description">
          <div className="virtual">
            <h3>Virtual</h3>
            <p>Price</p>
            <p>$2.74</p>
          </div>
          <div className="market-cap">
            <div className="market-state">
              <Image src={""} alt="Increase Icon" />
              <p>0.59%</p>
            </div>
            <p>Market cap</p>
            <p>$1.7B</p>
          </div>
        </div>
      </div>
    </section>
  );
}
