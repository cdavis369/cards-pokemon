import React from "react";
import backOfCard from "./back.png";
import {useFlip} from "./Hooks.js";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, setIsFacingUp] = useFlip(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
