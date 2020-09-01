import React from "react";
import '../styles/character.css'

const Character = (props) => {
  const width = props.health <= 0 ? '0%' : `${props.health}%`

  return (
    <div className="character">
      <span>{props.name}</span>
      <img className="character__img" src={require(`../assets/${props.name}.jpg`)} alt={props.name} />
      <div className="character__health">
        <div className="character__health-bar" style={{width}}>
          {props.health}
        </div>
      </div>
    </div>
  );
};

export default Character;
