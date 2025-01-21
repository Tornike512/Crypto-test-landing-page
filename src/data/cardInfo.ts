import meme1 from "../../public/images/meme-1.png";
import meme2 from "../../public/images/meme-2.png";
import meme3 from "../../public/images/meme-3.png";
import meme4 from "../../public/images/meme-4.png";
import { EDirection } from "@/enums/cardEnums";

export const cardInfo = [
  {
    id: "1",
    name: "VIRTUAL",
    image: meme1,
    price: "2.74",
    percentage: "0.59",
    marketCap: "1.7b",
    verified: false,
    direction: EDirection.UP,
  },
  {
    id: "2",
    name: "AI16Z",
    image: meme2,
    price: "0.0873",
    percentage: "11.59",
    marketCap: "962K",
    verified: true,
    direction: EDirection.DOWN,
  },
  {
    id: "3",
    name: "TICKER3",
    image: meme3,
    price: "0.1232",
    percentage: "",
    marketCap: "701M",
    verified: true,
    direction: EDirection.NEUTRAL,
  },
  {
    id: "4",
    name: "TICKER4",
    image: meme4,
    price: "24.51",
    percentage: "",
    marketCap: "988",
    verified: false,
    direction: EDirection.NEUTRAL,
  },
];
