import Image from "next/image";
import verifiedImage from "../../../public/images/verified-icon.png";

import { ICardTypes } from "@/interfaces/ICardTypes";
import { EDirection } from "@/enums/cardEnums";

import "@/styles/basicUi/_card.scss";

export default function Card({
  image,
  name,
  percentage,
  price,
  marketCap,
  verified,
  direction,
}: ICardTypes) {
  return (
    <div className="current-coin-card">
      <Image
        className="current-coin-image"
        width={300}
        height={500}
        src={image}
        alt="Current Coin"
      />
      <div className="coin-description">
        <div className="virtual">
          <div className="name-wrapper">
            <h3>{name}</h3>
            {verified && (
              <Image
                className="verified"
                src={verifiedImage}
                alt="Verified Icon"
              />
            )}
          </div>
          <p className="price">Price</p>
          <p className="exact-price">${price}</p>
        </div>
        <div className="market-cap">
          {direction !== EDirection.NEUTRAL ? (
            <p
              className={
                direction === EDirection.DOWN
                  ? "market-percentage-down"
                  : "market-percentage-up"
              }
            >
              {direction === EDirection.DOWN ? "▼" : "▲"} {percentage}%
            </p>
          ) : (
            <div className="neutral"></div>
          )}
          <p className="market-cap-text">Market cap</p>
          <p className="exact-market-cap">${marketCap}</p>
        </div>
      </div>
    </div>
  );
}
