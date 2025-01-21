"use client";

import { cardInfo } from "@/data/cardInfo";

import Card from "../basicUi/Card";

import "@/styles/sections/_hottestSection.scss";

export default function HottestSection() {
  return (
    <section className="hottest-section">
      <h2 className="hottest-main-text">Hottest</h2>
      <div className="card-grid">
        {cardInfo.map((card) => {
          return (
            <Card
              image={card.image.src}
              marketCap={card.marketCap}
              name={card.name}
              percentage={card.percentage}
              price={card.price}
              verified={card.verified}
              direction={card.direction}
              key={card.id}
            />
          );
        })}
      </div>
    </section>
  );
}
