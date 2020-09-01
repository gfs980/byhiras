import React from "react";
import Dice from "./Dice";

const Dices = (props) => {
  return (
    <div className="dices">
      <Dice value={props.dices.d1} />
      <Dice value={props.dices.d2} />
    </div>
  );
};

export default Dices;
