import React from "react";

const Dice = (props) => {
  return (
    <div className="dice">
      {props.value ?
        <img className="dice__img" src={require(`../assets/dice/${props.value}.png`)} alt={props.value} />
      : null }
    </div>
  );
};

export default Dice;
